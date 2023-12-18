import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

export const TypographyP = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
    return (
        <p {...props} className={cn("[&:not(:first-child)]:mt-6 text-xl leading-relaxed", className)} />
    )
}

export const Blockquote = ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => {
    return (
        <blockquote {...props} className={cn("mt-6 border-l-2 pl-6 italic", className)} />
    )
}

export const InlineCode = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
    return (
        <code {...props} className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} />
    )
}

