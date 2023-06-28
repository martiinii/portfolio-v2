import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const portfolioV1Project: ProjectType = {
    title: 'Portfolio v1',
    date: 'July 2022',
    description: 'First version of my personal website',
    skills: ['React', 'JavaScript', 'Tailwind'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/portfolio',
            icon: GitHubLogoIcon
        },
        {
            title: 'Website',
            href: 'https://portfolio-v1/martiinii.dev',
            icon: ExternalLinkIcon
        }
    ]
}