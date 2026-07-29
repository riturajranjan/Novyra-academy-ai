"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Check, ChevronDown, Loader2, MessageCircle } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { budgetOptionIds, serviceOptionIds, whatsappHref } from "@/content/lead-popup";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,}$/;
const SUBMIT_DELAY_MS = 1100;
const SUCCESS_FLASH_MS = 550;

type SubmitStatus = "idle" | "submitting" | "success";

/** Shared focus ring + border treatment for every field — a controlled
 * blue-violet glow rather than the site's usual bright blue, per this
 * pass's contrast/legibility fix. */
const FIELD_FOCUS = "focus:shadow-[0_0_0_3px_rgba(120,110,255,0.12),0_10px_30px_rgba(90,70,220,0.10)]";
const FIELD_BASE = "w-full rounded-2xl border bg-white/[0.055] text-[16px] text-white/[0.94] outline-none backdrop-blur-md transition-[border-color,box-shadow] duration-base placeholder:text-white/48";

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  as?: "input" | "textarea";
  required?: boolean;
}

/** Shared floating-label field for the free-text inputs. The "floated"
 * state (label shrunk to a caption above the value) is driven by React
 * state — focus or a non-empty value — rather than a CSS `:placeholder-
 * shown` trick, so it composes cleanly with Framer Motion's own animation
 * model instead of fighting it. */
function FloatingField({ id, label, value, onChange, error, type = "text", as = "input", required }: FieldProps) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const sharedProps = {
    id,
    value,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    "aria-invalid": Boolean(error),
    "aria-required": required,
    className: cn(
      "peer px-4 pt-5 pb-2",
      FIELD_BASE,
      FIELD_FOCUS,
      as === "textarea" ? "min-h-[112px] resize-none" : "h-[52px]",
      error ? "border-red-400/60" : "border-white/[0.11] focus:border-[rgba(120,110,255,0.70)]",
    ),
  };

  return (
    <div className="relative flex flex-col">
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={3} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...sharedProps} type={type} onChange={(e) => onChange(e.target.value)} />
      )}
      <motion.label
        htmlFor={id}
        className="pointer-events-none absolute left-4 text-white/48"
        animate={{
          top: floated ? 7 : 15,
          fontSize: floated ? 11 : 14,
          color: focused ? "rgba(120,110,255,0.9)" : "rgba(255,255,255,0.48)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        {label}
        {required ? " *" : ""}
      </motion.label>
      <AnimatePresence>
        {error ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1 overflow-hidden text-[11px] text-red-400"
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
  error?: string;
}

function SelectField({ id, label, placeholder, value, onChange, options, error }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-medium text-white/50">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          className={cn(
            "h-[52px] appearance-none px-4",
            FIELD_BASE,
            FIELD_FOCUS,
            value ? "text-white/[0.94]" : "text-white/48",
            error ? "border-red-400/60" : "border-white/[0.11] focus:border-[rgba(120,110,255,0.70)]",
          )}
        >
          <option value="" disabled className="bg-[#12162d] text-white/50">
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.id} value={o.id} className="bg-[#12162d] text-white">
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white/40" aria-hidden />
      </div>
      {error ? <p className="text-[11px] text-red-400">{error}</p> : null}
    </div>
  );
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initialValues: FormValues = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" };

interface LeadPopupFormProps {
  onSuccess: () => void;
}

/** The right-side form — floating-label fields, glass selects, a gradient
 * CTA with loading/hover states, and the trust row + WhatsApp fallback
 * beneath it. There's no backend wired up yet (same stage as the site's
 * footer newsletter form), so "submit" is a simulated delay that proves
 * the interaction end to end. */
export function LeadPopupForm({ onSuccess }: LeadPopupFormProps) {
  const t = useTranslations("leadPopup");
  const reduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function setField<K extends keyof FormValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) next.name = t("form.name.error");
    if (!EMAIL_PATTERN.test(values.email)) next.email = t("form.email.error");
    if (!PHONE_PATTERN.test(values.phone.trim())) next.phone = t("form.phone.error");
    if (!values.service) next.service = t("form.service.error");
    if (!values.budget) next.budget = t("form.budget.error");
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate() || status !== "idle") return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(onSuccess, SUCCESS_FLASH_MS);
    }, SUBMIT_DELAY_MS);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="flex flex-1 flex-col p-[18px] sm:p-[22px] md:p-[26px]"
    >
      <span className="glass text-caption inline-flex w-fit items-center gap-1.5 rounded-pill px-3 py-1.5 font-medium text-white/80">
        ✨ {t("badge")}
      </span>
      <h2
        id="lead-popup-heading"
        className="mt-[18px] text-[32px] leading-[1.05] font-semibold text-white text-balance sm:text-[44px]"
      >
        {t("heading.before")} <span className="text-gradient-brand">{t("heading.highlight")}</span>
      </h2>
      <p id="lead-popup-description" className="mt-4 text-[16px] leading-[1.55] text-white/60 text-pretty sm:text-[17px]">
        {t("description")}
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-[22px] flex flex-col gap-3.5">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <FloatingField id="lead-name" label={t("form.name.label")} value={values.name} onChange={(v) => setField("name", v)} error={errors.name} required />
          <FloatingField id="lead-email" label={t("form.email.label")} type="email" value={values.email} onChange={(v) => setField("email", v)} error={errors.email} required />
          <FloatingField id="lead-phone" label={t("form.phone.label")} type="tel" value={values.phone} onChange={(v) => setField("phone", v)} error={errors.phone} required />
          <FloatingField id="lead-company" label={t("form.company.label")} value={values.company} onChange={(v) => setField("company", v)} />
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <SelectField
            id="lead-service"
            label={t("form.service.label")}
            placeholder={t("form.service.label")}
            value={values.service}
            onChange={(v) => setField("service", v)}
            error={errors.service}
            options={serviceOptionIds.map((id) => ({ id, label: t(`form.service.options.${id}`) }))}
          />
          <SelectField
            id="lead-budget"
            label={t("form.budget.label")}
            placeholder={t("form.budget.label")}
            value={values.budget}
            onChange={(v) => setField("budget", v)}
            error={errors.budget}
            options={budgetOptionIds.map((id) => ({ id, label: t(`form.budget.options.${id}`) }))}
          />
        </div>

        <FloatingField id="lead-message" label={t("form.message.label")} as="textarea" value={values.message} onChange={(v) => setField("message", v)} />

        <Magnetic className="mt-1 w-full">
          <motion.button
            type="submit"
            disabled={status !== "idle"}
            data-cursor="cta"
            whileHover={reduceMotion || status !== "idle" ? undefined : { y: -2 }}
            whileTap={status !== "idle" ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "bg-gradient-brand group relative flex h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-2xl text-body font-semibold text-white transition-shadow duration-base",
              "shadow-[0_8px_24px_-8px_rgba(99,102,241,0.35)] hover:shadow-[0_10px_28px_-6px_rgba(139,92,246,0.45)]",
              "disabled:opacity-90",
            )}
          >
            <span
              aria-hidden
              className="bg-gradient-shimmer pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <AnimatePresence mode="wait" initial={false}>
              {status === "submitting" ? (
                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  {t("ctaSending")}
                </motion.span>
              ) : status === "success" ? (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" aria-hidden />
                </motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  {t("cta")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </Magnetic>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 pt-1 pb-5 text-center">
          {(["freeConsultation", "noHiddenCharges", "response24h"] as const).map((id) => (
            <span key={id} className="text-[12px] flex items-center gap-1.5 text-white/55 sm:text-[13px]">
              <span className="text-brand-emerald" aria-hidden>
                ✓
              </span>
              {t(`trust.${id}`)}
            </span>
          ))}
        </div>
      </form>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="glass text-caption mx-auto flex w-fit items-center gap-1.5 rounded-pill px-3.5 py-2 font-medium text-white/70 transition-colors duration-fast hover:text-white"
      >
        <MessageCircle className="text-brand-emerald h-3.5 w-3.5" aria-hidden />
        {t("urgentHelp")}
      </a>
    </motion.div>
  );
}
