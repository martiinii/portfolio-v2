import { HeroButtons } from "./heroButtons";
import { NewPost } from "./newPost";

export const Hero = () => (
    <header className='flex flex-col h-screen relative'>
        <div className='m-auto px-5 space-y-5
        before:-z-10 before:absolute before:inset-0 gradient-dot
        after:absolute after:-z-10 after:bg-gradient-to-b after:from-black after:via-transparent after:to-gray-950 after:inset-0'>
            <h1 className='text-6xl sm:text-8xl font-black text-center'>I&apos;m Martin</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-center'>
                <span className='from-blue-500 via-cyan-400 to-purple-600 bg-[length:200%] hover:bg-right transition-all duration-500 bg-gradient-to-r bg-clip-text text-transparent'>Fullstack</span> <span className="whitespace-nowrap">web-developer</span>
            </h2>
            <HeroButtons />
            <NewPost />
        </div>
    </header>
)