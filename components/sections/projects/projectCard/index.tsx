import { ProjectType } from "@/projects"
import { ProjectHeader } from "./projectHeader"
import { Card } from "@/components/ui/card"
import { ProjectContent } from "./projectContent"


export const ProjectCard = ({ title, date, shortDescription, description, img, links, skills }: ProjectType) => {
    return (
        <Card className='max-w-md md:max-w-xl w-full relative shadow-transparent shadow-xl h-fit
        hover:bg-zinc-950/20 hover:shadow-gray-900/30 transition ease-in
        after:h-20 after:w-px after:absolute after:-left-px after:top-3/4 after:opacity-0 after:bg-gradient-to-b after:from-transparent after:via-blue-600/80 after:to-transparent
        hover:after:top-[.2rem] hover:after:opacity-100
        after:transition-all after:duration-700 after:ease-in-out
        lg:group-hover/list:opacity-60
        lg:hover:!opacity-100
        '>
            <ProjectHeader
                title={title}
                img={img}
            />
            <ProjectContent
                title={title}
                shortDescription={shortDescription}
                description={description}
                date={date}
                skills={skills}
                links={links}
            />
        </Card>
    )
}