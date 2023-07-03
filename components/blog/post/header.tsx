import { dateToString } from "@/lib/blogPosts"

type PostHeaderProps = {
    children: React.ReactNode,
    date: string
}

export const PostHeader = ({ children, date }: PostHeaderProps) => {
    return (
        <header className="mt-5">
            <span className="text-2xl font-semibold text-muted-foreground">{dateToString(date)}</span>
            <h1 className="text-7xl font-black tracking-tight mt-3">{children}</h1>
        </header>
    )
}