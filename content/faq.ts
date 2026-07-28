import type { LucideIcon } from "lucide-react";
import { BadgeIndianRupee, Clock, ShieldCheck, Users } from "lucide-react";

export const faqTrustBadges = [
  "Free Consultation",
  "Transparent Process",
  "Fast Response",
  "Expert Team",
];

export interface FaqStat {
  label: string;
  icon: LucideIcon;
}

export const faqPanelStats: FaqStat[] = [
  { label: "24 Hour Response", icon: Clock },
  { label: "Free Consultation", icon: Users },
  { label: "Dedicated Experts", icon: ShieldCheck },
  { label: "No Hidden Charges", icon: BadgeIndianRupee },
];

export type FaqCategory =
  | "All"
  | "General"
  | "Pricing"
  | "Development"
  | "Support"
  | "SEO"
  | "AI"
  | "Integrations";

export const faqCategories: FaqCategory[] = [
  "All",
  "General",
  "Pricing",
  "Development",
  "Support",
  "SEO",
  "AI",
  "Integrations",
];

export interface FaqEntry {
  id: string;
  category: Exclude<FaqCategory, "All">;
  question: string;
  answer: string;
}

/** Each answer merges the spec's short answer with its explanation line into
 * one flowing paragraph, so the existing single-paragraph accordion body
 * stays unchanged — only the content grows, not the UI. */
export const faqEntries: FaqEntry[] = [
  // General
  {
    id: "general-why-novyra",
    category: "General",
    question: "Why should I choose Novyra Technologies?",
    answer:
      "We build premium websites, web applications, and AI-powered solutions using modern technologies with a focus on quality, speed, and scalability. Our goal is to create digital products that not only look great but also perform well and help your business grow.",
  },
  {
    id: "general-industries",
    category: "General",
    question: "Which industries do you work with?",
    answer:
      "We work with healthcare, education, SaaS, eCommerce, startups, finance, logistics, and many other industries. Every solution is customized to match your business goals instead of using one-size-fits-all templates.",
  },
  {
    id: "general-process",
    category: "General",
    question: "How does the project process work?",
    answer:
      "Every project follows Discovery → Planning → Design → Development → Testing → Launch → Support. You'll receive regular updates throughout the project, so you always know what's happening.",
  },
  {
    id: "general-international",
    category: "General",
    question: "Can you work with international clients?",
    answer:
      "Yes. We work remotely with clients from anywhere in the world. Meetings, project tracking, and communication are handled online for a smooth collaboration experience.",
  },
  {
    id: "general-nda",
    category: "General",
    question: "Do you sign NDAs?",
    answer:
      "Yes. We can sign a Non-Disclosure Agreement before starting your project. Your business ideas, documents, and sensitive information remain private and secure.",
  },
  // Pricing
  {
    id: "pricing-cost",
    category: "Pricing",
    question: "How much does a project cost?",
    answer:
      "The price depends on your project's size, features, and overall complexity. After understanding your requirements, we'll provide a detailed and transparent quotation.",
  },
  {
    id: "pricing-custom",
    category: "Pricing",
    question: "Why is pricing custom?",
    answer:
      "Every project differs in scope, integrations, and features, so the final quote depends on your specific requirements. The figures above are accurate starting points for each tier, refined into a fixed quote after a free consultation.",
  },
  {
    id: "pricing-consultation-free",
    category: "Pricing",
    question: "Is the consultation free?",
    answer:
      "Yes. Your first consultation is completely free. We'll discuss your goals, recommend the best solution, and answer your questions without any obligation.",
  },
  {
    id: "pricing-hidden-charges",
    category: "Pricing",
    question: "Are there any hidden charges?",
    answer:
      "No. We believe in complete pricing transparency. Everything included in your project is clearly mentioned before development begins.",
  },
  {
    id: "pricing-milestones",
    category: "Pricing",
    question: "Can I pay in milestones?",
    answer:
      "Yes. Most projects follow milestone-based payments. This keeps the process transparent and ensures you only pay as work progresses.",
  },
  {
    id: "pricing-upgrade",
    category: "Pricing",
    question: "Can I upgrade my package later?",
    answer:
      "Absolutely. Additional features can be added anytime. Your website or application can grow as your business grows.",
  },
  // Development
  {
    id: "dev-tech-stack",
    category: "Development",
    question: "Which technologies do you use?",
    answer:
      "We use React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, GraphQL, AWS, Docker, and more. We always choose modern, reliable technologies that are suitable for your project.",
  },
  {
    id: "dev-responsive",
    category: "Development",
    question: "Will my website be mobile responsive?",
    answer:
      "Yes. Every website is optimized for mobile, tablet, and desktop devices. Your visitors will enjoy a smooth experience on every screen size.",
  },
  {
    id: "dev-custom-software",
    category: "Development",
    question: "Do you build custom software?",
    answer:
      "Yes. Every project is built specifically for your business. We don't rely on generic templates for custom solutions.",
  },
  {
    id: "dev-admin-dashboards",
    category: "Development",
    question: "Do you provide admin dashboards?",
    answer:
      "Yes. We develop secure and easy-to-use admin panels. You'll be able to manage content, users, and business data without technical knowledge.",
  },
  {
    id: "dev-api-integrations",
    category: "Development",
    question: "Can you integrate third-party APIs?",
    answer:
      "Yes. We integrate payment gateways, CRMs, AI services, analytics, and many other APIs. Your software can easily connect with the tools your business already uses.",
  },
  // Support
  {
    id: "support-post-launch",
    category: "Support",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Every project includes post-launch support. We'll help with bug fixes, updates, and technical assistance after launch.",
  },
  {
    id: "support-response-time",
    category: "Support",
    question: "How quickly do you respond?",
    answer:
      "Most support requests receive a response within 24 hours. Critical issues are given priority whenever possible.",
  },
  {
    id: "support-maintain-existing",
    category: "Support",
    question: "Can you maintain my existing website?",
    answer:
      "Yes. We provide maintenance for websites built by us or by other developers. We can improve performance, security, and add new features whenever needed.",
  },
  {
    id: "support-monitoring",
    category: "Support",
    question: "Do you offer website monitoring?",
    answer:
      "Yes. Monitoring services are available with our maintenance plans. We can monitor uptime, performance, and security to keep your website running smoothly.",
  },
  {
    id: "support-new-features",
    category: "Support",
    question: "Can I request new features later?",
    answer:
      "Absolutely. Your project is designed to be scalable, making future improvements simple and efficient.",
  },
  // SEO
  {
    id: "seo-included",
    category: "SEO",
    question: "Is SEO included?",
    answer:
      "Yes. Every website is built following technical SEO best practices. This helps search engines understand your website more effectively.",
  },
  {
    id: "seo-google",
    category: "SEO",
    question: "Will my website be optimized for Google?",
    answer:
      "Yes. We optimize performance, metadata, structured data, and Core Web Vitals. A well-optimized website has a better chance of ranking higher in search results.",
  },
  {
    id: "seo-speed",
    category: "SEO",
    question: "Do you improve website speed?",
    answer:
      "Yes. Performance optimization is included in every project. Fast-loading websites improve user experience and SEO.",
  },
  {
    id: "seo-ongoing",
    category: "SEO",
    question: "Do you provide ongoing SEO services?",
    answer:
      "Yes. Monthly SEO plans are available. We can help improve rankings, traffic, and website visibility over time.",
  },
  {
    id: "seo-migration",
    category: "SEO",
    question: "Can you migrate my website without losing SEO?",
    answer:
      "Yes. We follow safe migration practices. Proper redirects and SEO planning help protect your existing search rankings.",
  },
  // AI
  {
    id: "ai-integrate",
    category: "AI",
    question: "Can you integrate AI into my website?",
    answer:
      "Yes. We build AI-powered features and automation. AI can improve customer support, productivity, and business efficiency.",
  },
  {
    id: "ai-models",
    category: "AI",
    question: "Which AI models do you support?",
    answer:
      "We work with OpenAI, Claude, Google Gemini, and other modern AI platforms. The best AI solution is selected based on your business needs.",
  },
  {
    id: "ai-automate",
    category: "AI",
    question: "Can AI automate business tasks?",
    answer:
      "Yes. AI can automate repetitive work such as customer support, lead qualification, reporting, and content generation.",
  },
  {
    id: "ai-saas",
    category: "AI",
    question: "Do you build AI SaaS products?",
    answer:
      "Yes. We develop complete AI-powered SaaS platforms. From idea to deployment, we can build scalable AI applications tailored to your business.",
  },
  {
    id: "ai-secure",
    category: "AI",
    question: "Is AI secure?",
    answer:
      "Yes. We follow industry best practices for security and privacy. Sensitive data is protected using secure authentication and encrypted communication.",
  },
  // Integrations
  {
    id: "integrations-payment",
    category: "Integrations",
    question: "Which payment gateways do you support?",
    answer:
      "We integrate Stripe, Razorpay, PayPal, Cashfree, and other providers. The payment gateway is selected based on your target market and business requirements.",
  },
  {
    id: "integrations-crm-erp",
    category: "Integrations",
    question: "Can you connect my CRM or ERP?",
    answer:
      "Yes. We integrate popular CRM and ERP platforms. This helps centralize customer information and automate business processes.",
  },
  {
    id: "integrations-analytics",
    category: "Integrations",
    question: "Do you integrate analytics tools?",
    answer:
      "Yes. We support Google Analytics, Google Tag Manager, Microsoft Clarity, Mixpanel, and more. These tools help you understand visitor behavior and measure business growth.",
  },
  {
    id: "integrations-notifications",
    category: "Integrations",
    question: "Can you integrate email and notification services?",
    answer:
      "Yes. We integrate email, SMS, WhatsApp, and push notification services. Automated notifications help improve customer communication and engagement.",
  },
  {
    id: "integrations-apis",
    category: "Integrations",
    question: "Can you connect my software with third-party APIs?",
    answer:
      "Yes. We build secure REST API, GraphQL, and webhook integrations. This allows your application to communicate seamlessly with external services and business tools.",
  },
];
