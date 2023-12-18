import { CustomMDX } from "@/components/mdx/customMDX";
import { getPostById, getPostsIds } from "@/lib/blogPosts";
import { Metadata } from "next";

type Props = {
    params: ReturnType<typeof generateStaticParams>[number]
}
export default function BlogPost({ params }: Props) {
    const { id } = params;

    const post = getPostById(id)
    if (!post) return;

    return (
        <CustomMDX
            source={post.content}
        />
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