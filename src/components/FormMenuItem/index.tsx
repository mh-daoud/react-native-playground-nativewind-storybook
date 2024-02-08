import { WithClassName } from "../../types/NativeWind"
import StyledButton from "../StyledButton"
import StyledText from "../StyledText"



type FormMenuItemProps = WithClassName & {
    onPress: () => void,
    title: string,
    withDiscloserIcon?: boolean
}

export const FormMenuItem = ({ onPress, title, withDiscloserIcon }: FormMenuItemProps) => {
    return <StyledButton
        onPress={onPress}
        className="flex-row w-full items-center justify-between border-b-2 border-gray-300 pb-4 pt-4"
    >
        <StyledText
            className="text-sm text-gray-600 "
        >
            {title}
        </StyledText>
        <StyledText
            className="text-sm text-gray-600"
        >
            {'>'}
        </StyledText>
    </StyledButton>
}