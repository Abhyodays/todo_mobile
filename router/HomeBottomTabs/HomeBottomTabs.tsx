import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tasks from "../../screens/Tasks/Tasks";
import Calendar from "../../screens/Calendar/Calendar";
import Search from "../../screens/Search/Search";
import Options from "../../screens/Options/Options";
import Icon from "react-native-vector-icons/Ionicons";
import FAIcon from "react-native-vector-icons/FontAwesome5";
import { HomeBottomTabsParam } from "../../types/HomeBottomTabsParam";
const HomeBottomTabs = () => {
    const Tab = createBottomTabNavigator<HomeBottomTabsParam>();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true }} >
            <Tab.Screen name="Tasks" component={Tasks} options={{ tabBarLabel: "Tasks", tabBarIcon: ({ color, size }) => <FAIcon name="tasks" size={28} color={color} /> }} />
            <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarLabel: "Calendar", tabBarIcon: ({ color, size }) => <Icon name="calendar" size={28} color={color} /> }} />
            <Tab.Screen name="Search" component={Search} options={{ tabBarIcon: ({ color, size }) => <Icon name="search-sharp" size={28} color={color} /> }} />
            <Tab.Screen name="Options" component={Options} options={{ tabBarIcon: ({ color, size }) => <Icon name="menu-sharp" size={28} color={color} /> }} />
        </Tab.Navigator>
    )
}

export default HomeBottomTabs;