import { BoxIcon, ScrollTextIcon } from "lucide-react"
import { IconLinkButton } from "../ui/iconLinkButton"

export const BlogNavbar = () => {
    return (
        <nav className="mx-auto w-fit mt-5 space-x-6">
            <IconLinkButton
                href="/blog"
                icon={ScrollTextIcon}
                variant={'ghost'}
            >
                Blog
            </IconLinkButton>

            <IconLinkButton
                href="/"
                icon={BoxIcon}
                variant={'ghost'}
            >
                Portfolio
            </IconLinkButton>
        </nav>
    )
}