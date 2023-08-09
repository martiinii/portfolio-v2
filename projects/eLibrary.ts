import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import eLibraryImage from '@/public/projects/elibrary.png'

export const eLibraryProject: ProjectType = {
    title: 'E-Library',
    date: 'May 2022',
    shortDescription: 'Browse and read books from Project Gutenberg',
    description: 'Web application for looking through books from Project Gutenberg. Includes list of favorite books and filtering. Made as a task for job offer.',
    skills: ['Next.js', 'JavaScript', 'Tailwind'],
    img: eLibraryImage,
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/eLibrary',
            icon: GitHubLogoIcon
        },
        {
            title: 'Website',
            href: 'https://elibrary.martiinii.dev',
            icon: ExternalLinkIcon
        }
    ]
}