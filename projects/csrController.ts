import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const csrControllerProject: ProjectType = {
    title: 'CSR Controller',
    date: 'April 2023',
    description: 'Small library for creating type-safe database controllers between client and api server. Built in support for middleware, Next.js and Electron',
    skills: ['TypeScript', 'Jest', 'NPM Package'],
    links: [
        {
            title: 'Github',
            href: 'https://github.com/Martiinii/csr-controller',
            icon: GitHubLogoIcon
        },
        {
            title: 'NPM Package',
            href: 'https://www.npmjs.com/package/csr-controller',
            icon: ExternalLinkIcon
        }
    ]
}