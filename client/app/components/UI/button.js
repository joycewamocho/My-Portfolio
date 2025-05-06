import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Button({
  variant = "default",
  size = "default",
  asChild = false,
  href,
  children,
  ...props
}) {
  const className = `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${
    variant === "default"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-input hover:bg-accent hover:text-accent-foreground"
  } ${
    size === "default" ? "h-10 py-2 px-4" : "h-9 px-3 rounded-md text-xs"
  }`;

  // Only pass className to Link to avoid invalid button props on <a>
  if (asChild && href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
