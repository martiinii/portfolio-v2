import { Badge } from "@/components/ui/badge"
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { IconButton } from "@/components/ui/iconButton"
import { IconLinkButton } from "@/components/ui/iconLinkButton"
import { Separator } from "@/components/ui/separator"
import { LinkType } from "@/projects"
import { ChevronRightIcon } from "lucide-react"

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
        <CardContent className="flex flex-col sm:flex-row gap-6 justify-between sm:items-center">
            <section className="space-y-1.5">
                <div className="flex gap-4 items-center">
                    <CardTitle>{title}</CardTitle>
                    <Separator orientation="vertical" className="h-8" />
                    <span>{date}</span>
                </div>
                <CardDescription>{shortDescription}</CardDescription>
            </section>


            <Dialog>
                <DialogTrigger asChild>
                    <IconButton
                        icon={ChevronRightIcon}
                        className="px-6"
                        variant={'secondary'}
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
                    const LinkElement = l.disabled ? (
                        <IconButton
                            icon={l.icon}
                            variant={'secondary'}
                            disabled
                            className="h-auto"
                            key={l.href}
                        >
                            {l.title} (Disabled temporary)
                        </IconButton>
                    ) : (
                        <IconLinkButton
                            href={l.href}
                            icon={l.icon}
                            title={l.title}
                            variant={'secondary'}
                            linkProps={{
                                target: '_blank'
                            }}
                            key={l.href}
                        >
                            {l.title}
                        </IconLinkButton>
                    )
                    return (
                        LinkElement
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