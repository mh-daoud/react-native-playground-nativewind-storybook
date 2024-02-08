import Header from "../../components/Header"
import { StyledButton } from "../../components/StyledButton"
import StyledSafeAreaView from "../../components/StyledSafeAreaView"
import StyledText from "../../components/StyledText"
import StyledTextInput from "../../components/StyledTextInput"
import StyledView from "../../components/StyledView"

export const LoginScreen = () => {
    return (

        <StyledSafeAreaView
            className="items-center flex-1"
        >
            <Header />
            <StyledView className="justify-center">
                <StyledView className="bg-gray-500 w-2/3 px-2 py-2 rounded-lg ">
                    <StyledText className=" pb-2 text-center text-base">
                        Welcome
                    </StyledText>
                    <StyledText className="text-white pb-2 text-center text-sm">
                        Please enter your username and password to login
                    </StyledText>
                    <StyledTextInput
                        className="bg-gray-400 text-white mb-2 p-2 rounded text-sm"
                        placeholderTextColor={"#fff"}
                        placeholder="Enter your username..."
                    />
                    <StyledTextInput
                        className="bg-gray-400 text-white mb-2 p-2 rounded text-sm"
                        placeholderTextColor={"#fff"}
                        placeholder="Enter your password..."
                    />
                    <StyledButton
                        className="bg-amber-600 self-center rounded px-4 py-2"
                    >
                        <StyledText className="text-white text-sm">Login</StyledText>
                    </StyledButton>
                </StyledView>
            </StyledView>
        </StyledSafeAreaView>
    )
}


export default LoginScreen