type LogoLabelProps = {
    icon: React.ReactNode,
    children: string
}
export const LogoLabel = ({ icon, children }: LogoLabelProps) => {
    return (
        <span className="flex items-center gap-4">
            {icon}
            {children}
        </span>
    )
}