import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Checkbox } from "../ui/checkbox"

type InputMDXProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export const InputMDX = ({ type, ...props }: InputMDXProps) => {
    if (type == 'checkbox') {
        return <Checkbox checked={!!props.checked} className="mx-0" />
    } else {
        return <input type={type} {...props} />
    }
}