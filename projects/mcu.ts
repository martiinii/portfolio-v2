import { ExternalLinkIcon } from "lucide-react";
import { ProjectType } from ".";
import mcuImage from '@/public/projects/mcu.png'

export const mcuProject: ProjectType = {
    title: 'MCU Timeline',
    date: 'August 2022',
    shortDescription: 'Timeline showing order of watching MCU movies and series',
    description: 'As a Marvel Cinematic Universe fan I have made this website to keep track of MCu movies and TV series and their order. It is currently unupdated because of my lack of time, but I am currently redesigning it from scratch.',
    skills: ['Gatsby', 'TypeScript', 'Python', 'Chakra UI'],
    img: mcuImage,
    links: [
        {
            title: 'Website',
            href: 'https://mcu.martiinii.dev',
            icon: ExternalLinkIcon
        }
    ]
}