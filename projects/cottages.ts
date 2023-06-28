import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";

export const cottagesProject: ProjectType = {
    title: 'Cottages for rent',
    date: 'January 2022',
    description: 'Websites with information about two houses for rent. Built in booking system and admin dashboard',
    skills: ['HTML', 'JavaScript', 'CSS'],
    links: [
        {
            title: 'Smrekówka',
            href: 'https://www.martini.zakopa.net/smrekowka/',
            icon: ExternalLinkIcon
        },
        {
            title: 'Niedźwiedzia chata',
            href: 'https://www.martini.zakopa.net/niedzwiedzia_chata/',
            icon: ExternalLinkIcon
        }
    ]

}