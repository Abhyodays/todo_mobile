import { NavigationContainer } from "@react-navigation/native"
import MainBottomTabs from "./MainBottomTabs/MainBottomTabs"
import { StatusBar } from "react-native";

const Router = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor="#fff" />
            <MainBottomTabs />
        </NavigationContainer>
    )
}

export default Router;