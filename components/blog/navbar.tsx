import { CubeIcon, HomeIcon, ReaderIcon } from "@radix-ui/react-icons"
import { ButtonIconLink } from "../ui/buttonIconLink"

export const BlogNavbar = () => {
    return (
        <nav className="mx-auto w-fit mt-5 space-x-6">
            <ButtonIconLink href="/blog" icon={<ReaderIcon className="scale-150" />} variant={'ghost'}>
                Blog
            </ButtonIconLink>

            <ButtonIconLink href="/" icon={<CubeIcon className="scale-150" />} variant={'ghost'}>
                Portfolio
            </ButtonIconLink>
        </nav>
    )
}