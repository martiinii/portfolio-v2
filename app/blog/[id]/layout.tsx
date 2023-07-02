export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <article className="prose prose-invert lg:prose-xl mx-auto max-w-7xl p-5 lg:p-10">
            {children}
        </article>
    )
}
