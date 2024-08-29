import { Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Task } from "../../types/Task";
import Icon from "react-native-vector-icons/Entypo";
import IonIcon from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { memo } from "react";
import { MainStackParam } from "../../types/MainStackParamList";
type TaskCardProps = {
    task: Task,
    onRadioPress?: (id: string) => void
}
const TaskCard = ({ task, onRadioPress }: TaskCardProps) => {
    const isCompleted = task.isCompleted;
    const navigation = useNavigation<StackNavigationProp<MainStackParam>>();
    const gotoDetails = (taskId: string) => {
        navigation.navigate("TaskDetails", { id: taskId });
    }
    return (
        <TouchableOpacity onPress={() => gotoDetails(task.id)} testID="todo_card">
            <View style={[styles.card, isCompleted ? { opacity: 0.5 } : null]}>
                {
                    <TouchableOpacity onPress={() => onRadioPress!(task.id)} testID="button_radio">
                        {!isCompleted ?
                            <Icon name="circle" style={styles.icon} testID="icon_circle" />
                            :
                            <IonIcon name="checkmark-circle" style={styles.icon} testID="icon_checkmark" />
                        }
                    </TouchableOpacity>
                }
                <View >
                    <Text style={styles.text} testID="todo_name">{task.name}</Text>
                    {/* {task.subTasks.length > 0 &&
                        <Icon name="flow-cascade" size={16} />} */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default memo(TaskCard);