import { SafeAreaView, ViewProps } from "react-native"
import { WithClassName } from "../../types/NativeWind"

type StyledSafeAreaViewProps = ViewProps & WithClassName
export const StyledSafeAreaView = (props: StyledSafeAreaViewProps) => {
    const { children, className, ...restProps } = props
    return (<SafeAreaView {...restProps} className={`${className}`}>
        {children}
    </SafeAreaView>)
}


export default StyledSafeAreaView