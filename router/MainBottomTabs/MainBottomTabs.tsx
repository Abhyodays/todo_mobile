import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavParamList from "../../types/TabNavParamList";
import Tasks from "../../screens/Tasks/Tasks";
import Calendar from "../../screens/Calendar/Calendar";
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'
import Options from "../../screens/Options/Options";
import Search from "../../screens/Search/Search";
import TaskStack from "../TaskStack/TaskStack";
import CalendarStack from "../CalendarStack/CalendarStack";

const MainBottomTabs = () => {
    const Tab = createBottomTabNavigator<NavParamList>();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
            <Tab.Screen name="TaskStack" component={TaskStack} options={{ tabBarLabel: "Tasks", tabBarIcon: ({ color, size }) => <FAIcon name="tasks" size={28} color={color} /> }} />
            <Tab.Screen name="CalendarStack" component={CalendarStack} options={{ tabBarLabel: "Calendar", tabBarIcon: ({ color, size }) => <Icon name="calendar" size={28} color={color} /> }} />
            <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ color, size }) => <Icon name="search-sharp" size={28} color={color} /> }} />
            <Tab.Screen name="Options" component={Options} options={{ tabBarIcon: ({ color, size }) => <Icon name="menu-sharp" size={28} color={color} /> }} />
        </Tab.Navigator>
    )
}

export default MainBottomTabs;