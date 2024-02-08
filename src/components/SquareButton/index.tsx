import StyledButton, { StyledButtonProps } from "../StyledButton"
import StyledText from "../StyledText"
import StyledView from "../StyledView"



type SquareButtonProps = Omit<StyledButtonProps, 'children'> & {
    iconName: string,
    title: string
}

export const SquareButton = (props: SquareButtonProps) => {
    const { className, title, ...restProps } = props
    return <StyledButton
        {...restProps}
        className={`${className} flex-column items-center justify-center border-2 border-gray-500 bg-orange-800 px-4 py-2 rounded-2xl`}
    >
        <StyledView className="w-14 h-14 bg-red-950 mt-2" />
        <StyledText
            className={`text-sm text-gray-200 pt-2 mb-2`}
        >
            {title}
        </StyledText>
    </StyledButton>
}


export default SquareButton