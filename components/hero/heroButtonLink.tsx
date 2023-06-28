import { ButtonIconLink } from "../ui/buttonIconLink"

type HeroButtonLinkProps = {
    href: string,
    title: string,
    icon: React.ReactNode
}
export const HeroButtonLink = ({ href, icon, title }: HeroButtonLinkProps) => {
    return (
        <ButtonIconLink className="p-5 h-min" variant={'outline'}
            href={href}
            icon={icon}
            title={title}
            linkProps={{
                target: '_blank'
            }}
        />

    )
}