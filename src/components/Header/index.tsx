import { Appearance } from "react-native"
import { StyledButton } from "../StyledButton"
import StyledText from "../StyledText"
import StyledView from "../StyledView"
import { useColorScheme } from "nativewind"

const Header = () => {
    const { colorScheme, setColorScheme } = useColorScheme();
    return (
        <StyledView className="flex-row items-center mt-2 justify-between px-2 w-full">
            <StyledText className="text-black dark:text-white s text-base">
                DarkMode: {colorScheme == 'dark' ? "ON" : "OFF"}
            </StyledText>
            <StyledButton
                onPress={() => {
                    setColorScheme(colorScheme == 'light' ? 'dark' : 'light')
                }}
                className="px-4 py-2 bg-amber-500 itemst-center rounded-lg">
                <StyledText className="text-white text-sm">Toggle Dark Mode</StyledText>
            </StyledButton>
        </StyledView>
    )
}


export default Header