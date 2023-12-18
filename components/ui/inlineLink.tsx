import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import { buttonVariants } from "./button"
import Link from "next/link"

type InlineLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const InlineLink = ({ href, ref, ...props }: InlineLinkProps) => {
    return <Link href={href ?? '/'} {...props} className={buttonVariants({ variant: 'link', size: 'link' })} />
}