import { TextInput, TextInputProps } from "react-native"
import { WithClassName } from "../../types/NativeWind"


type StyledTextInputProps = TextInputProps & WithClassName

export const StyledTextInput = (props: StyledTextInputProps) => {
    const { className, ...restProps } = props
    return <TextInput
        {...restProps}
        className={`${className}`}
    />
}



export default StyledTextInput