import { Text, Touchable, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Task } from "../../types/Task";
import Icon from "react-native-vector-icons/Entypo";
import IonIcon from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { Colors } from "../../constants/Colors";
import { COMPLETED } from "../../constants/TaskStatus";
import { useNavigation } from "@react-navigation/native";
import { StackNavParamList } from "../../types/StackNavParamList";
import NavParamList from "../../types/TabNavParamList";
import { StackNavigationProp } from "@react-navigation/stack";
type TaskCardProps = {
    task: Task,
    onRadioPress?: (id: string) => void
}
const TaskCard = ({ task, onRadioPress }: TaskCardProps) => {
    const isCompleted = task.isCompleted;
    const navigation = useNavigation<StackNavigationProp<StackNavParamList>>();
    const gotoDetails = (taskId: string) => {
        console.log(taskId)
        navigation.push("TaskDetails", { id: taskId });
    }
    return (
        <TouchableOpacity onPress={() => gotoDetails(task.id)}>
            <View style={[styles.card, isCompleted ? { opacity: 0.5 } : null]}>
                {!isCompleted ?
                    <TouchableOpacity onPress={() => onRadioPress!(task.id)}>
                        <Icon name="circle" style={styles.icon} />
                    </TouchableOpacity> :
                    <IonIcon name="checkmark-circle" style={styles.icon} />
                }
                <View>
                    <Text style={styles.text}>{task.name}</Text>
                    {task.subTasks.length > 0 &&
                        <Icon name="flow-cascade" size={16} />}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TaskCard;