import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const H1 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white", className)} />
    )
}

export const H2 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={cn("scroll-m-20 mt-8 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white", className)} />
    )
}

export const H3 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={cn("scroll-m-20 mt-8 text-2xl font-semibold tracking-tight text-white", className)} />
    )
}

export const H4 = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={cn("scroll-m-20 mt-8 text-xl font-semibold tracking-tight text-white", className)} />
    )
}