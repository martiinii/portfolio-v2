import { Badge } from "@/components/ui/badge"
import { ButtonIcon } from "@/components/ui/buttonIcon"
import { ButtonIconLink } from "@/components/ui/buttonIconLink"
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { LinkType } from "@/projects"
import { ChevronRightIcon } from "@radix-ui/react-icons"

type ProjectContentProps = {
    title: string,
    shortDescription: string,
    description: string,
    date: string,
    links: LinkType[],
    skills: SkillType[]
}
export const ProjectContent = ({ title, shortDescription, description, date, skills, links }: ProjectContentProps) => {
    return (
        <CardContent className="flex gap-6 justify-between items-center">
            <section>
                <div className="flex gap-4 items-center">
                    <CardTitle>{title}</CardTitle>
                    <Separator orientation="vertical" className="h-8" />
                    <span>{date}</span>
                </div>
                <CardDescription>{shortDescription}</CardDescription>
            </section>


            <Dialog>
                <DialogTrigger asChild>
                    <ButtonIcon
                        icon={<ChevronRightIcon className="scale-110" />}
                        className="px-6"
                    />
                </DialogTrigger>

                <DialogContent className="space-y-4">
                    <ProjectHeader description={description} />
                    <ProjectSkills skills={skills} />
                    <ProjectLinks links={links} />
                </DialogContent>
            </Dialog>
        </CardContent>
    )
}


type ProjectHeaderProps = {
    description: string
}
const ProjectHeader = ({ description }: ProjectHeaderProps) => {
    return (
        <DialogHeader>
            <DialogTitle>About</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
    )
}

type ProjectSkillsProps = {
    skills: SkillType[]
}
const ProjectSkills = ({ skills }: ProjectSkillsProps) => {
    return (
        <DialogHeader>
            <DialogTitle>Technologies used</DialogTitle>
            <div className="flex flex-wrap gap-2 justify-center drop-shadow-sm">
                {skills.map((s, i) => <SkillBadge key={i} skill={s} />)}
            </div>
        </DialogHeader>
    )
}

type ProjectLinksProps = {
    links: LinkType[]
}
const ProjectLinks = ({ links }: ProjectLinksProps) => {
    return (
        <DialogHeader>
            <DialogTitle>Links</DialogTitle>
            <div className="flex flex-col gap-4">
                {links.map(l => {
                    const Icon = l.icon;
                    return (
                        <ButtonIconLink
                            href={l.href}
                            icon={<Icon className='scale-150' />}
                            title={l.title}
                            variant={'secondary'}
                            key={l.title}
                            linkProps={{
                                target: '_blank'
                            }}
                        >
                            {l.title}
                        </ButtonIconLink>
                    )
                })}
            </div>
        </DialogHeader>
    )
}


type SkillBadgeProps = {
    skill: SkillType
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
    return (
        <Badge variant='skill'>{skill}</Badge>
    )
}