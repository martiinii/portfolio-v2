import { StaticImageData } from "next/image"
import { climberProject } from "./climber"
import { cottagesProject } from "./cottages"
import { csrControllerProject } from "./csrController"
import { eLibraryProject } from "./eLibrary"
import { mcuProject } from "./mcu"
import { portfolioV1Project } from "./portfolioV1"
import { portfolioV2Project } from "./portfolioV2"
import { LucideIcon } from "lucide-react"

export type ProjectType = {
    title: string,
    shortDescription: string,
    description: string,
    date: string,
    skills: SkillType[]
    links: LinkType[],
    img?: StaticImageData
}

export type LinkType = {
    href: string,
    title: string,
    icon: LucideIcon
}


export const projectsList = [
    portfolioV2Project,
    climberProject,
    mcuProject,
    csrControllerProject,
    eLibraryProject,
    cottagesProject,
    portfolioV1Project
]
