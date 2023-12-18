import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { InputMDX } from "./inputMDX"
import { H1, H2, H3, H4 } from "../typography/headings"
import { Blockquote, InlineCode, TypographyP } from "../typography/text"
import { TypographyLI, TypographyOL, TypographyUL } from "../typography/list"
import { LinkMDX } from "./linkMDX"

export const CustomMDX = (props: MDXRemoteProps) => {
    return (
        <MDXRemote
            {...props}
            options={{
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm
                    ],
                },
            }}

            components={{
                input: InputMDX,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                a: LinkMDX,
                p: TypographyP,
                blockquote: Blockquote,
                code: InlineCode,
                ul: TypographyUL,
                ol: TypographyOL,
                li: TypographyLI,
            }}
        />
    )
}