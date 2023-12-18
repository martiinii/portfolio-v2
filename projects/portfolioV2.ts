import { Github } from "lucide-react";
import { ProjectType } from ".";
import portfolioImage from '@/public/projects/portfolio.png'

export const portfolioV2Project: ProjectType = {
    title: 'Portfolio v2',
    date: 'June 2023',
    shortDescription: 'Second iteration of my personal website',
    description: 'After over an year after creating first version I had motivation to create this brand new portfolio. Designed loosely in Figma, built with Next.js 13 app router, deployed with Vercel.',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    img: portfolioImage,
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/portfolio-v2',
            icon: Github
        }
    ]
}