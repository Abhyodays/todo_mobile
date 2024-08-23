import { createStackNavigator } from "@react-navigation/stack"
import { MainStackParam } from "../../types/MainStackParamList"
import TaskDetails from "../../screens/TaskDetails/TaskDetails";
import HomeBottomTabs from "../HomeBottomTabs/HomeBottomTabs";

const MainStack = () => {
    const Stack = createStackNavigator<MainStackParam>();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeBottomTabs} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
    )
}

export default MainStack;