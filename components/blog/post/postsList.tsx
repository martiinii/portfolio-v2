import { dateToString, getAllPosts } from "@/lib/blogPosts"
import { Button } from "../../ui/button"
import Link from "next/link"

type PostProps = {
    children: React.ReactNode,
    date: string
    href: string
}
const Post = ({ children, date, href }: PostProps) => {
    const dateText = dateToString(date);

    return (
        <li className="flex items-baseline justify-between">
            <Button asChild variant={'link'} className="text-xl font-bold">
                <Link href={`/blog/${href}`}>{children}</Link>
            </Button>
            <span className="uppercase font-bold text-muted-foreground shrink-0">{dateText}</span>
        </li>
    )
}

export const PostsList = () => {
    const posts = getAllPosts();

    return (
        <ul className="space-y-3">
            {posts.map(p => (
                <Post key={p.data.title} href={p.href} date={p.data.date}>{p.data.title}</Post>
            ))}
        </ul>
    )
}