import { climberProject } from "./climber"
import { cottagesProject } from "./cottages"
import { csrControllerProject } from "./csrController"
import { eLibraryProject } from "./eLibrary"
import { portfolioV1Project } from "./portfolioV1"
import { portfolioV2Project } from "./portfolioV2"

export type ProjectType = {
    title: string,
    description: string,
    date: string,
    skills: SkillType[]
    links: LinkType[]
}

export type LinkType = {
    href: string,
    title: string,
    icon: React.ForwardRefExoticComponent<any>
}


export const projectsList = [
    portfolioV2Project,
    climberProject,
    csrControllerProject,
    eLibraryProject,
    cottagesProject,
    portfolioV1Project
]
