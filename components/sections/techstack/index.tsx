import { NextLogo } from "@/components/icons/nextjs"
import { Accordion } from "@/components/ui/accordion"
import { ReactLogo } from "@/components/icons/react"
import { ChakraUILogo } from "@/components/icons/chakraui"
import { TailwindLogo } from "@/components/icons/tailwind"
import { ShadcnUILogo } from "@/components/icons/shadcnui"
import { TypeScriptLogo } from "@/components/icons/typescript"
import { AccordionTech, AccordionTechProps } from "./accordionTech"
import { LucideIcon } from "lucide-react"

const techStackItems: { icon: AccordionTechProps['icon'], label: string, text: string }[] = [
    {
        icon: TypeScriptLogo,
        label: "TypeScript",
        text: "Adds additional syntax to JavaScript. With types we can catch errors as early as in editor to waste no time bug-hunting. Converts to many targets so it can run anywhere JavaScript runs"
    },
    {
        icon: ReactLogo,
        label: "React",
        text: "One of the most popular libraries for building front end web applications. It has big community that creates additional libraries to make web better"
    },
    {
        icon: NextLogo,
        label: "Next.js",
        text: "Framework for building full-stack webapps that comes with latest features and many useful tools out of the box. It provides excellent performance and fast build times"
    },
    {
        icon: TailwindLogo,
        label: "Tailwind CSS",
        text: "Utility-first CSS framework for styling websites. Uses latest CSS features to outperform other styling frameworks"
    },
    {
        icon: ShadcnUILogo,
        label: "shadcn/ui",
        text: "Collection of components built on top accessible and unstyled primitives from Radix UI. Integrated with Tailwind CSS to provide support for React Server Components"
    },
]

export const TechStack = () => {
    return (
        <section className="p-6 text-center space-y-3">
            <h2 className='font-bold text-5xl mb-8 text-center'>Tech stack I use</h2>
            <Accordion
                type="single"
                collapsible
                className="max-w-xl mx-auto"
            >
                {techStackItems.map(i => (
                    <AccordionTech
                        icon={i.icon}
                        label={i.label}
                        key={i.label}
                    >
                        {i.text}
                    </AccordionTech>
                ))}


            </Accordion>
            <p>And more</p>
        </section>
    )
}