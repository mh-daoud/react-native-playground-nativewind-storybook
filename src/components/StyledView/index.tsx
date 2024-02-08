import { View, ViewProps } from "react-native"
import { WithClassName } from "../../types/NativeWind"

type StyledViewProps = ViewProps & WithClassName

export const StyledView = (props: StyledViewProps) => {
    const { className, children, ...restProps } = props
    return (
        <View
            {...restProps}
            className={`${className}`}
        >
            {children}
        </View>
    )
}


export default StyledView