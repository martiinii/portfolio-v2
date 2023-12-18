import { HeroButtonLink } from "./heroButtonLink"
import { GithubIcon, LinkedinIcon, MailIcon, ScrollTextIcon } from "lucide-react"

export const HeroButtons = () => {
    return (
        <div className="flex gap-4 justify-center">
            <HeroButtonLink
                href="https://github.com/Martiinii"
                title="Github"
                icon={GithubIcon}
            />
            <HeroButtonLink
                href="https://www.linkedin.com/in/marcin-g%C4%85sienica-makowski-990a4923a/"
                title="LinkedIn"
                icon={LinkedinIcon}
            />
            <HeroButtonLink
                href="mailto:me.martiinii@gmail.com"
                title="Email"
                icon={MailIcon}
            />
            <HeroButtonLink
                sameTab
                href="/blog"
                title="Blog"
                icon={ScrollTextIcon}
            />
        </div>
    )
}