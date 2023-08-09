import { CardHeader } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"

type ProjectHeaderProps = {
    title: string,
    img?: StaticImageData
}
export const ProjectHeader = ({ title, img }: ProjectHeaderProps) => {
    return (
        // Fix padding if there is no image available by dividing it by 2
        <CardHeader className={img ? undefined : 'p-3'}>
            {img &&
                <Image
                    src={img}
                    alt={`${title} graphic`}
                    className="rounded-t-xl img-mask"
                    placeholder="blur"
                />
            }
        </CardHeader>


    )
}