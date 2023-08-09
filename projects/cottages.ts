import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import cottagesImage from '@/public/projects/smrekowka.png';

export const cottagesProject: ProjectType = {
    title: 'Cottages for rent',
    date: 'January 2022',
    shortDescription: 'Websites with informations and image galleries for two houses located in Zakopane',
    description: 'Built in booking system and admin dashboard for managing clients.',
    skills: ['HTML', 'JavaScript', 'CSS'],
    img: cottagesImage,
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