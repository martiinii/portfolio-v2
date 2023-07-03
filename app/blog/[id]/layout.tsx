import { PostHeader } from "@/components/blog/post/header";
import { Separator } from "@/components/ui/separator";
import { getPostById } from "@/lib/blogPosts"

export default function RootLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: {
        id: string
    }
}) {
    const post = getPostById(params.id);
    if (!post) return;

    return (
        <>
            <PostHeader date={post.data.date}>{post.data.title}</PostHeader>
            <Separator />

            <article className="prose prose-invert md:prose-xl my-10">
                {children}
            </article>
        </>
    )
}