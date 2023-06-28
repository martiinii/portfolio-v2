import { ProjectType } from "@/projects"
import { ProjectCard } from "../projectCard"

type WithChildrenProps = {
    children: React.ReactNode
}
const MasonryWrapper = ({ children }: WithChildrenProps) => {
    return (
        <div className="grid gap-4 h-fit">
            {children}
        </div>
    )
}

const generateArrayChunks = <T,>(arr: T[], size: number) => {
    const arrayCopy = [...arr];
    const chunks: T[][] = [];

    const chunkSize = Math.ceil(arrayCopy.length / size);

    for (let i = 0; i < size; i++) {
        chunks.push(arrayCopy.splice(0, chunkSize));
    }

    return chunks;
}

type ProjectListSectionProps = {
    projects: ProjectType[]
}
export const ProjectListSection = ({ projects }: ProjectListSectionProps) => {
    const masonryArray = generateArrayChunks(projects, 2);

    return (
        <section className='bg-slate-950 max-w-7xl m-auto p-6'>
            <h3 className='font-bold text-4xl mb-8 text-center'>My projects</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-4 group/list'>
                {masonryArray.map((projects, wi) => (
                    <MasonryWrapper key={wi}>
                        {projects.map((p, i) => (
                            <ProjectCard
                                key={i}
                                {...p}
                            />
                        ))}
                    </MasonryWrapper>
                ))}
            </div>
        </section>
    )
}