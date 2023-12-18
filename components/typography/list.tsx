import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

export const TypographyUL = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
    return (
        <ul {...props} className={cn("my-6 ml-6 list-disc [&>li]:mt-2 space-y-4")} />
    )
}

export const TypographyOL = ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => {
    return (
        <ol {...props} className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 space-y-4", className)} />
    )
}

export const TypographyLI = ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => {
    const isTaskList = className?.includes('task-list-item')

    return (
        <li {...props} className={cn("text-xl ml-6", isTaskList && 'marker:content-none ml-1', className)} />
    )
}