import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { MyProjects } from '@/components/sections/projects/projectList'

export default function Home() {
    return (
        <>
            <Hero />
            <MyProjects />
            <Footer />
        </>
    )
}