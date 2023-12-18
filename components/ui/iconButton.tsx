import * as React from "react"
import { Button, ButtonProps } from "./button"
import { cn } from "@/lib/utils"
import { Loader, LucideIcon } from "lucide-react"

export const iconButtonClassName = "mr-2 h-5 w-5";


export type IconButtonProps = ButtonProps & {
    icon?: ((props: React.HTMLAttributes<HTMLOrSVGElement>) => JSX.Element) | LucideIcon | null,
    iconClassName?: string,
    isLoading?: boolean
    hideTextWhenLoading?: boolean,
    iconRight?: boolean
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, iconClassName, isLoading, disabled, hideTextWhenLoading, children, iconRight, ...props }, ref) => {
        const Icon = isLoading ? Loader : icon;
        const IconElement = (Icon && <Icon className={cn(iconButtonClassName, iconRight && "mr-0 ml-2", ((isLoading && hideTextWhenLoading) || !children) && 'mr-0 ml-0', isLoading && 'animate-spin', iconClassName)} />)

        return (
            <Button
                ref={ref}
                {...props}
                disabled={isLoading || disabled}
            >
                {!iconRight && IconElement}
                {(hideTextWhenLoading && isLoading) ? null : children}
                {iconRight && IconElement}
            </Button>
        )
    }
)
IconButton.displayName = "Icon button"