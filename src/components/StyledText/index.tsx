import { Text, TextProps } from "react-native"
import { WithClassName } from "../../types/NativeWind"


type StyledTextProps = TextProps & WithClassName

export const StyledText = (props: StyledTextProps) => {
    const { className, children, ...restProps } = props
    return (<Text
        {...restProps}
        className={`${className}`}
    >
        {children}
    </Text>)
}


export default StyledText