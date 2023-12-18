import { ExternalLinkIcon, ScrollTextIcon } from "lucide-react";
import { ProjectType } from ".";
import climberImage from '@/public/projects/climber.png'

export const climberProject: ProjectType = {
    title: 'Climber',
    date: 'May 2023',
    shortDescription: 'Web app and application for managing people at climbing walls',
    description: 'This is second version of this project. It now includes real time view and synchronization, settings, weather data, statistics, charts and more.',
    skills: ['Next.js', 'Electron', 'TypeScript', 'Chakra UI', 'MySQL', 'SQLite', 'Prisma', 'Pusher'],
    img: climberImage,
    links: [
        {
            title: 'Demo',
            href: 'https://climber-demo.martiinii.dev',
            icon: ExternalLinkIcon
        },
        {
            title: 'Post on blog',
            href: '/blog/climber',
            icon: ScrollTextIcon
        }
    ]
}