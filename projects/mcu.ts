import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const mcuProject: ProjectType = {
    title: 'MCU Timeline',
    date: 'August 2022',
    description: 'Timeline showing order of watching MCU movies and series. Using Python scripts to automate web scrapping for images',
    skills: ['Gatsby', 'TypeScript', 'Python', 'Chakra UI'],
    links: [
        {
            title: 'Website',
            href: 'https://mcu.martiinii.dev',
            icon: ExternalLinkIcon
        }
    ]
}