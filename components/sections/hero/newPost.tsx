import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { getAllPosts } from "@/lib/blogPosts"
import { BellRing } from "lucide-react"
import Link from "next/link"

export const NewPost = () => {
    const latestPost = getAllPosts()[0];
    if (!latestPost) return null;

    if (isOlderThan(latestPost.data.date, 14)) return null;

    return (
        <Alert className="w-fit mx-auto group hover:bg-slate-900 transition-colors ">
            <BellRing />
            <Link
                href={`blog/${latestPost.href}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                target="_blank"
                aria-label={`New post: ${latestPost.data.title}`}
            >
                <span className="absolute inset-0" />
                <AlertTitle>New post!</AlertTitle>
            </Link>
            <AlertDescription>{latestPost.data.title}</AlertDescription>
        </Alert>

    )
}

const isOlderThan = (date: string, days: number) => {
    const delta = Date.now() - new Date(date).getTime();
    const daysInMs = 864e5 * days; // 24 * 60 * 60 * 1000 * n

    return delta > daysInMs;
}