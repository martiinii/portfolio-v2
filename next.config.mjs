import createMDX from "@next/mdx"
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // mdxRs is rust-based MDX compiler. Not recommended for production
    // experimental: {
    //     mdxRs: true
    // }
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: []
    }
})

export default withMDX(nextConfig)