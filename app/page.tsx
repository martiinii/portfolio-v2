import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { MyProjects } from '@/components/sections/projects/projectList'
import { TechStack } from '@/components/sections/techstack'

export const revalidate = 86400;

export default function Home() {
    return (
        <>
            <Hero />
            <main className='space-y-48 container'>
                <MyProjects />
                <TechStack />
            </main>
            <Footer />
        </>
    )
}