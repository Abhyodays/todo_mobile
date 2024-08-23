import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native";
import MainStack from "./MainStack/MainStack";

const Router = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor="#fff" />
            <MainStack />
        </NavigationContainer>
    )
}

export default Router;