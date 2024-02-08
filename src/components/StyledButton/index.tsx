import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { WithClassName } from "../../types/NativeWind";

export type StyledButtonProps = TouchableOpacityProps & WithClassName

export const StyledButton = (props: StyledButtonProps) => {
    const { className, children, ...restProps } = props
    return (
        <TouchableOpacity
            {...restProps}
            className={`${props.className}`}>
            {children}
        </TouchableOpacity>
    )
}


export default StyledButton