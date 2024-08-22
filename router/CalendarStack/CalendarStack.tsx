import { createStackNavigator } from "@react-navigation/stack"
import { CalendarStackParamList } from "../../types/CalendarStackParamList";
import Calendar from "../../screens/Calendar/Calendar";
import TaskDetails from "../../screens/TaskDetails/TaskDetails";

const CalendarStack = () => {
    const Stack = createStackNavigator<CalendarStackParamList>();
    return (
        <Stack.Navigator initialRouteName="Calendar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Navigator>
    )
}

export default CalendarStack