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

            {/* prose prose-invert prose-h3:text-2xl md:prose-xl  */}
            <article className="my-10 text-slate-300">
                {children}
            </article>
        </>
    )
}