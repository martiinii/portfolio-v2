import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

type LinkMDXProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
export const LinkMDX = ({ href, ref, ...props }: LinkMDXProps) => {

    return <Link href={href ?? '/'} {...props} className={buttonVariants({ variant: 'link', size: 'link' })} />
}