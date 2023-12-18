
import { InlineLink } from "@/components/ui/inlineLink"

export const Footer = () => {
    return (
        <footer className="sticky top-[100vh] w-full mt-40 border-t p-6 bg-muted/20 text-lg text-center">
            <div className="container">
                <p className="text-2xl">Designed and built by Martin</p>
                <p>Graphic by amazing <InlineLink href="https://www.instagram.com/madidraw.insta/" rel="noopener" target="_blank">@madidraw.insta</InlineLink></p>
            </div>
        </footer>
    )
}