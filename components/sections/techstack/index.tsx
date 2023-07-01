import { NextLogo } from "@/components/icons/nextjs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LogoLabel } from "./logoLabel"
import { ReactLogo } from "@/components/icons/react"
import { ChakraUILogo } from "@/components/icons/chakraui"
import { TailwindLogo } from "@/components/icons/tailwind"
import { ShadcnUILogo } from "@/components/icons/shadcnui"
import { TypeScriptLogo } from "@/components/icons/typescript"

export const TechStack = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
            <h2 className='font-bold text-5xl mb-8 text-center'>Tech stack I use</h2>

            <Accordion
                type="single"
                collapsible
                className="max-w-xl mx-auto"
            >
                <AccordionItem value="TypeScript">
                    <AccordionTrigger>
                        <LogoLabel icon={<TypeScriptLogo />}>TypeScript</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        Adds additional syntax to JavaScript. With types we can catch errors as early as in editor to waste no time bug-hunting. Converts to many targets so it can run anywhere JavaScript runs
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="React">
                    <AccordionTrigger>
                        <LogoLabel icon={<ReactLogo />}>React</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        One of the most popular libraries for building front end web applications. It has big community that creates additional libraries to make web better
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Next.js">
                    <AccordionTrigger>
                        <LogoLabel icon={<NextLogo />}>Next.js</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        Framework for building full-stack webapps that comes with latest features and many useful tools out of the box. It provides excellent performance and fast build times
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Chakra UI">
                    <AccordionTrigger>
                        <LogoLabel icon={<ChakraUILogo />}>Chakra UI</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        Simple and easy to use component library with fantastic DX. Provides many components that are easily customizable, but lacks support for React Server Components
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="Tailwind CSS">
                    <AccordionTrigger>
                        <LogoLabel icon={<TailwindLogo />}>Tailwind CSS</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        Utility-first CSS framework for styling websites. Uses latest CSS features to outperform other styling frameworks
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shadcn/ui">
                    <AccordionTrigger>
                        <LogoLabel icon={<ShadcnUILogo />}>shadcn/ui</LogoLabel>
                    </AccordionTrigger>
                    <AccordionContent>
                        Collection of components built on top accessible and unstyled primitives from Radix UI. Integrated with Tailwind CSS to provide support for React Server Components
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}