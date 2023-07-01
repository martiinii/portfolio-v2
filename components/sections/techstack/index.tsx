import { NextLogo } from "@/components/icons/nextjs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LogoLabel } from "./logoLabel"
import { ReactLogo } from "@/components/icons/react"
import { ChakraUILogo } from "@/components/icons/chakraui"
import { TailwindLogo } from "@/components/icons/tailwind"
import { ShadcnUILogo } from "@/components/icons/shadcnui"
import { TypeScriptLogo } from "@/components/icons/typescript"
import { AccordionTech } from "./accordionTech"

export const TechStack = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
            <h2 className='font-bold text-5xl mb-8 text-center'>Tech stack I use</h2>

            <Accordion
                type="single"
                collapsible
                className="max-w-xl mx-auto"
            >
                <AccordionTech
                    icon={TypeScriptLogo}
                    label="TypeScript"
                >
                    Adds additional syntax to JavaScript. With types we can catch errors as early as in editor to waste no time bug-hunting. Converts to many targets so it can run anywhere JavaScript runs
                </AccordionTech>

                <AccordionTech
                    icon={ReactLogo}
                    label="React"
                >
                    One of the most popular libraries for building front end web applications. It has big community that creates additional libraries to make web better
                </AccordionTech>

                <AccordionTech
                    icon={NextLogo}
                    label="Next.js"
                >
                    Framework for building full-stack webapps that comes with latest features and many useful tools out of the box. It provides excellent performance and fast build times
                </AccordionTech>

                <AccordionTech
                    icon={ChakraUILogo}
                    label="Chakra UI"
                >
                    Simple and easy to use component library with fantastic DX. Provides many components that are easily customizable, but lacks support for React Server Components
                </AccordionTech>

                <AccordionTech
                    icon={TailwindLogo}
                    label="Tailwind CSS"
                >
                    Utility-first CSS framework for styling websites. Uses latest CSS features to outperform other styling frameworks
                </AccordionTech>

                <AccordionTech
                    icon={ShadcnUILogo}
                    label="shadcn/ui"
                >
                    Collection of components built on top accessible and unstyled primitives from Radix UI. Integrated with Tailwind CSS to provide support for React Server Components
                </AccordionTech>
            </Accordion>
        </section>
    )
}