import { IconLinkButton } from "@/components/ui/iconLinkButton"
import { LucideIcon } from "lucide-react"

type HeroButtonLinkProps = {
    href: string,
    title: string,
    icon: LucideIcon,
    sameTab?: boolean
}
export const HeroButtonLink = ({ href, icon, title, sameTab }: HeroButtonLinkProps) => {
    return (
        <IconLinkButton className="p-3 h-auto" variant={'outline'}
            href={href}
            icon={icon}
            iconClassName="h-8 w-8"
            title={title}
            linkProps={{
                target: sameTab ? '_self' : '_blank'
            }}
        />

    )
}