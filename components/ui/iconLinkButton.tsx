import * as React from "react"

import { Button, ButtonProps } from "./button"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { iconButtonClassName } from "./iconButton";


type IconLinkButtonProps = ButtonProps & {
    icon?: ((props: React.HTMLAttributes<HTMLOrSVGElement>) => JSX.Element) | LucideIcon | null,
    href: string,
    linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>,
    iconClassName?: string
    iconRight?: boolean
}

const IconLinkButton = React.forwardRef<HTMLButtonElement, IconLinkButtonProps>(
    ({ icon, children, href, title, linkProps = {}, iconClassName, iconRight, ...props }, ref) => {
        const { className: linkClass, ...restLinkProps } = linkProps;
        const Icon = icon;

        const IconElement = (Icon && <Icon className={cn(iconButtonClassName, iconRight && "mr-0 ml-2", !children && "mr-0 ml-0", iconClassName)} />)

        return (
            <Button
                ref={ref}
                {...props}
                asChild
            >
                <Link href={href} title={title} className={cn(linkClass)} {...restLinkProps}>
                    {!iconRight && IconElement}
                    {children}
                    {iconRight && IconElement}
                </Link>
            </Button>
        )
    }
)

IconLinkButton.displayName = 'IconLinkButton';

export { IconLinkButton }