import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const eLibraryProject: ProjectType = {
    title: 'E-Library',
    date: 'May 2022',
    description: 'Web application for browsing and reading books from Project Gutenberg. Includes list of favorite books and filtering',
    skills: ['Next.js', 'JavaScript', 'Tailwind'],
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