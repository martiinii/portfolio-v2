import * as React from "react"

import { Button, ButtonProps } from "./button"

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps & { icon: React.ReactNode }>(
    ({ icon, children, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                {...props}
            >
                {icon}
                {children}
            </Button>
        )
    }
)

ButtonIcon.displayName = 'ButtonIcon';

export { ButtonIcon }