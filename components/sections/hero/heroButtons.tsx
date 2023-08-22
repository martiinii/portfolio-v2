import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, ReaderIcon } from "@radix-ui/react-icons"
import { HeroButtonLink } from "./heroButtonLink"

export const HeroButtons = () => {
    return (
        <div className="flex gap-4 justify-center">
            <HeroButtonLink
                href="https://github.com/Martiinii"
                title="Github"
                icon={<GitHubLogoIcon className="scale-200" />}
            />
            <HeroButtonLink
                href="https://www.linkedin.com/in/marcin-g%C4%85sienica-makowski-990a4923a/"
                title="LinkedIn"
                icon={<LinkedInLogoIcon className="scale-200" />}
            />
            <HeroButtonLink
                href="mailto:me.martiinii@gmail.com"
                title="Email"
                icon={<EnvelopeClosedIcon className="scale-200" />}
            />
            <HeroButtonLink
                sameTab
                href="/blog"
                title="Blog"
                icon={<ReaderIcon className="scale-200" />}
            />
        </div>
    )
}