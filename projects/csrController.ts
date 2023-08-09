import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import npmImage from '@/public/projects/npm.png'

export const csrControllerProject: ProjectType = {
    title: 'CSR Controller',
    date: 'April 2023',
    shortDescription: 'Create typesafe database controller between frontend and backend',
    description: 'Small library for creating end-to-end typesafe API. Built in support for middleware, Next.js and Electron',
    skills: ['TypeScript', 'Jest', 'NPM Package'],
    img: npmImage,
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