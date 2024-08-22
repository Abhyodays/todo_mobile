import { createStackNavigator } from "@react-navigation/stack"
import { StackNavParamList } from "../../types/StackNavParamList";
import Tasks from "../../screens/Tasks/Tasks";
import TaskDetails from "../../screens/TaskDetails/TaskDetails";

const TaskStack = () => {
    const Stack = createStackNavigator<StackNavParamList>();
    return (
        <Stack.Navigator initialRouteName="Tasks" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tasks" component={Tasks} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
    )
}

export default TaskStack;