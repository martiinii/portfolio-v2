import { BlogNavbar } from "@/components/blog/navbar"

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <BlogNavbar />
            <main className="max-w-3xl mx-auto p-6 space-y-6">
                {children}
            </main>
        </>
    )
}
