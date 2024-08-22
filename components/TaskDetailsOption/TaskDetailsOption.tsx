import { Text, View } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import HighlightText from "../HighlightText/HighlightText";

type TaskDetailsOption = {
    icon: string,
    title: string,
    value?: string
}
const TaskDetailsOption = ({ icon, title, value }: TaskDetailsOption) => {
    console.log()
    return (
        <View style={styles.container}>

            <View style={styles.container_left}>
                <Icon name={icon} size={24} color={Colors.dark_grey} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <HighlightText text={value} />
        </View>
    )
}
export default TaskDetailsOption;