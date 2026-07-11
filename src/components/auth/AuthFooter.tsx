import Link from "next/link";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({ text, linkText, href }: AuthFooterProps) {
  return (
    <div className="space-y-6 pt-6">
      <div className="text-center">
        <span className="text-sm text-slate-400">{text}</span>

        <Link
          href={href}
          className="
            ml-2
            font-semibold
            text-primary
            transition-colors
            hover:text-primary/80
          ">
          {linkText}
        </Link>
      </div>
    </div>
  );
}
