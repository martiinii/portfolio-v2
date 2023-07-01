import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HeroButtonLink } from "./heroButtonLink";

export const Hero = () => (
    <header className='flex flex-col h-screen relative'>
        <div className='m-auto px-5 text-center
        before:-z-10 before:absolute before:inset-0 gradient-dot
        after:absolute after:-z-10 after:bg-gradient-to-b after:from-black after:via-transparent after:to-slate-950 after:inset-0'>
            <h1 className='text-6xl sm:text-8xl font-black'>I&apos;m Martin</h1>
            <h2 className='text-4xl sm:text-6xl my-4 font-bold'>
                <span className='from-blue-500 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent'>Fullstack</span> <span className="whitespace-nowrap">web-developer</span></h2>
            <div className="flex gap-4 justify-center mt-5">
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
            </div>
        </div>
    </header>
)