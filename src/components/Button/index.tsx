import { StyledButton, StyledButtonProps } from "../StyledButton"


type ButtonProps = StyledButtonProps & {
    fullRounded?: boolean
}

export const Button = (props: ButtonProps) => {
    const { className, children, fullRounded, ...restProps } = props
    return <StyledButton
        {...restProps}
        className={`bg-amber-400 px-4 py-2 ${fullRounded ? 'rounded-xl' : 'rounded-tl-xl rounded-br-xl'}`}
    >
        {children}
    </StyledButton>
}



export default Button