import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const climberProject: ProjectType = {
    title: 'Climber',
    date: 'May 2023',
    description: 'Second version of website and application for managing people at climbing walls. Includes real time view and synchronization, settings, weather data, statistics, charts and more',
    skills: ['Next.js', 'Electron', 'TypeScript', 'Chakra UI', 'MySQL', 'SQLite', 'Prisma', 'Pusher'],
    links: [
        {
            title: 'Demo',
            href: 'https://climber-demo.vercel.com',
            icon: ExternalLinkIcon
        }
    ]
}