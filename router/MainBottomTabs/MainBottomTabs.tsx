import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavParamList from "../../types/TabNavParamList";
import Tasks from "../../screens/Tasks/Tasks";
import Calendar from "../../screens/Calendar/Calendar";
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Ionicons'
import Options from "../../screens/Options/Options";
import Search from "../../screens/Search/Search";
import TaskStack from "../TaskStack/TaskStack";

const MainBottomTabs = () => {
    const Tab = createBottomTabNavigator<NavParamList>();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="TaskStack" component={TaskStack} options={{ tabBarLabel: "Tasks", tabBarLabelStyle: { fontSize: 14, fontWeight: '500' }, tabBarIcon: ({ color, size }) => <FAIcon name="tasks" size={size} color={color} /> }} />
            <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarLabelStyle: { fontSize: 14, fontWeight: '500' }, tabBarIcon: ({ color, size }) => <Icon name="calendar" size={size} color={color} /> }} />
            <Tab.Screen name="Search" component={Search} options={{ tabBarLabelStyle: { fontSize: 14, fontWeight: '500' }, tabBarIcon: ({ color, size }) => <Icon name="search-sharp" size={size} color={color} /> }} />
            <Tab.Screen name="Options" component={Options} options={{ tabBarLabelStyle: { fontSize: 14, fontWeight: '500' }, tabBarIcon: ({ color, size }) => <Icon name="menu-sharp" size={size} color={color} /> }} />
        </Tab.Navigator>
    )
}

export default MainBottomTabs;