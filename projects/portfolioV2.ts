import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const portfolioV2Project: ProjectType = {
    title: 'Portfolio v2',
    date: 'June 2023',
    description: 'Second iteration of my personal website',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/portfolio-v2',
            icon: GitHubLogoIcon
        }
    ]
}