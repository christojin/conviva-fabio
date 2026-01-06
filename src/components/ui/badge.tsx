import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-foreground)]",
        secondary:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
        accent:
          "bg-[var(--accent)] text-[var(--accent-foreground)]",
        destructive:
          "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
        outline:
          "text-[var(--text-primary)] border border-[var(--border)]",
        success:
          "bg-[var(--success-light)] text-[var(--success)]",
        warning:
          "bg-[var(--warning-light)] text-[var(--warning)]",
        info:
          "bg-[var(--info-light)] text-[var(--info)]",
        error:
          "bg-[var(--error-light)] text-[var(--error)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
