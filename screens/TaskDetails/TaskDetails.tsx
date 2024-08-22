import { Text, TextInput, TouchableOpacity, View } from "react-native"
import CommonStyles from "../styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import Header from "../../components/Header/Header";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { Task } from "../../types/Task";
import { removeTodo, updateTodo } from "../../redux/thunks/todoThunks";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import TaskDetailsOption from "../../components/TaskDetailsOption/TaskDetailsOption";
import { Colors } from "../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPickerModal from 'react-native-modal-datetime-picker'
import { formatDate } from "../../utils/dateUtils";
import { TaskStackNavParamList } from "../../types/TaskStackNavParamList";


const TaskDetails = ({ route }: any) => {
    const navigation = useNavigation<StackNavigationProp<TaskStackNavParamList>>();
    const id = route?.params?.id;
    const todo = useAppSelector(state => state.todos).find(t => t.id === id);
    const [textInput, setTextInput] = useState<string>(todo?.name || "");
    const [dateInput, setDateInput] = useState<string>(todo?.date || "")
    const [calendarVisibility, setCalendarVisibility] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const goBack = () => {
        navigation.goBack();
    }
    const removeTask = () => {
        if (!todo) return;
        dispatch(removeTodo(todo.id));
        goBack();
    }
    const handleUpdate = useCallback(() => {
        if (!todo || (textInput === todo.name && dateInput === todo.date)) return;
        const updatedTask: Task = {
            ...todo,
            name: textInput,
            date: dateInput
        };
        console.log("updated:", updatedTask);
        dispatch(updateTodo(updatedTask));
    }, [todo, textInput, dateInput]);
    console.log(todo)
    const handleConfirmDate = (date: Date) => {
        setDateInput(date.toJSON());
        hideCalendar();
    }
    const showCalendar = () => {
        setCalendarVisibility(true);
    }
    const hideCalendar = () => {
        setCalendarVisibility(false);
    }
    useFocusEffect(useCallback(() => {
        return () => {
            handleUpdate();
        };
    }, [handleUpdate])
    );
    return (
        <View style={CommonStyles.container}>
            <View style={styles.header_container}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" color={Colors.black} size={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={removeTask}>
                    <Text style={CommonStyles.link}>Delete</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.text_input_container}>
                <TextInput multiline={true} style={styles.text_input}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                />
            </ScrollView>
            <View>
                <TaskDetailsOption icon="calendar-sharp" title="Due Date" value={formatDate(dateInput) || "No Date"} onCalendarPress={showCalendar} />
            </View>
            {/* modals */}
            <CalendarPickerModal
                date={new Date(dateInput)}
                onCancel={() => setCalendarVisibility(false)}
                onConfirm={handleConfirmDate}
                isVisible={calendarVisibility}
            />
        </View>
    )
}

export default TaskDetails;