import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { MyProjects } from '@/components/projects/projectList'

export default function Home() {
    return (
        <>
            <Hero />
            <MyProjects />
            <Footer />
        </>
    )
}