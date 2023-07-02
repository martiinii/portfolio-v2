import { InputMDX } from "@/components/mdx/inputMDX";
import { getPostById, getPostsIds } from "@/lib/blogPosts";
import { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type Props = {
    params: ReturnType<typeof generateStaticParams>[number]
}
export default function BlogPost({ params }: Props) {
    const { id } = params;

    const post = getPostById(id)
    if (!post) return;

    return (
        <>
            <h1>{post.data.title}</h1>
            <MDXRemote
                source={post.content}
                options={{
                    mdxOptions: {
                        remarkPlugins: [
                            remarkGfm
                        ],

                    },
                }}
                components={{
                    input: props => <InputMDX {...props} />
                }}
            />
        </>
    )
}

export function generateMetadata(
    { params }: Props,
): Metadata {
    const { id } = params;

    const post = getPostById(id);
    if (!post) return {};

    return {
        title: post.data.title
    }
}

export function generateStaticParams() {
    const posts = getPostsIds();

    return posts.map(p => ({
        id: p
    }))
}