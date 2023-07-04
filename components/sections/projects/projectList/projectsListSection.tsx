import { ProjectType } from "@/projects"
import { ProjectCard } from "../projectCard"
import { ArrowTopRightIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons"
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import clsx from "clsx"
import { ButtonIconLink } from "@/components/ui/buttonIconLink"
import Link from "next/link"

const gridGap = "gap-8 md:gap-5"

type WithChildrenProps = {
    children: React.ReactNode
}
const MasonryWrapper = ({ children }: WithChildrenProps) => {
    return (
        <div className={clsx(gridGap, "grid h-fit")}>
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
            <header className="text-center mb-8">
                <h2 className='font-bold text-5xl mb-5'>My projects</h2>

                <Link href={'/blog'} className={badgeVariants({ variant: 'outline', className: 'mb-5 space-x-2 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background' })} >
                    <span className="text-sm">Check out my blog</span>
                    <Separator orientation="vertical" className="h-5" />
                    <RocketIcon className="scale-125" />
                </Link>
            </header>

            <div className={clsx(gridGap, "grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto group/list")}>
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