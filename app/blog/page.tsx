import { BlogHeader } from "@/components/blog/header";
import { PostsList } from "@/components/blog/post/postsList";
import { Separator } from "@/components/ui/separator";

export default function BlogPage() {
    return (
        <>
            <BlogHeader />
            <Separator />
            <PostsList />
        </>
    )
}