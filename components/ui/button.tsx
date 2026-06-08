import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sky-500 text-white hover:bg-sky-400 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:-translate-y-0.5",
        outline: "border border-white/20 text-white/80 hover:bg-white/5 hover:text-white hover:border-white/40",
        ghost: "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10",
        white: "bg-white text-neutral-900 hover:bg-neutral-100 font-bold",
      },
      size: {
        sm: "h-9 px-5 text-xs",
        default: "h-11 px-7 text-sm",
        lg: "h-13 px-9 text-base",
        xl: "h-14 px-10 text-base font-bold",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
