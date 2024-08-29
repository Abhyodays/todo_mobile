import { Text, View, TouchableOpacity } from "react-native"
import { Task } from "../../types/Task"
import styles from "./styles"
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { memo } from "react"
import { MainStackParam } from "../../types/MainStackParamList"

type CalendarTaskCardProps = {
    task: Task
}

const CalendarTaskCard = ({ task }: CalendarTaskCardProps) => {
    const isCompleted = task.isCompleted
    const navigation = useNavigation<StackNavigationProp<MainStackParam>>()
    const gotoDetails = (id: string) => {
        if (id)
            navigation.navigate("TaskDetails", { id })
    }
    return (
        <TouchableOpacity onPress={() => gotoDetails(task.id)} >
            <View style={[styles.card, isCompleted ? { opacity: 0.5 } : null]} testID="CalendarTaskCard_container">
                <Text style={[styles.text, isCompleted ? styles.text_completed : null]} testID="CalendarTaskCard_text">{task.name}</Text>
                {/* {task.subTasks.length > 0 &&
                    <Icon name="flow-cascade" size={16} />} */}
            </View>
        </TouchableOpacity>
    )
}

export default memo(CalendarTaskCard);