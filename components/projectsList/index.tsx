import { projectsList } from "@/projects"
import { ProjectListSection } from "./projectsListSection"
import { ProjectCard } from "../projectCard"

export const MyProjects = () => {
    return (
        <ProjectListSection
            projects={projectsList}
        />
    )
}