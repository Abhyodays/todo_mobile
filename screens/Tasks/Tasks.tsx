import { useEffect, useMemo, useRef, useState } from "react";
import { Button, FlatList, KeyboardAvoidingView, Modal, Pressable, StatusBar, Text, TextComponent, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { Task } from "../../types/Task";
import CommonStyles from "../styles";
import TaskCard from "../../components/TaskCard/TaskCard";
import Icon from 'react-native-vector-icons/Entypo'
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { Colors } from "../../constants/Colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import NoTaskCard from "../../components/NoTaskCard/NoTaskCard";
import { addTodo, getAllTodos, updateTodo } from "../../redux/thunks/todoThunks";
import { isDateEqual } from "../../utils/dateUtils";

const Tasks = () => {
    const tasks = useAppSelector(state => state.todos);
    const dispatch = useAppDispatch();
    const [modalVisibility, setModalVisibility] = useState(false)
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [dateInput, setDateInput] = useState<Date | null>(null);
    const [taskInput, setTaskInput] = useState("");

    const todayTasks = useMemo(() => tasks.filter(t => !t.date || isDateEqual(t.date, new Date().toJSON())), [tasks])
    const uncompletedTasks = todayTasks.filter(t => !t.isCompleted);
    const completedTasks = todayTasks.filter(t => t.isCompleted);
    const toggleComplete = (id: string) => {
        let taskToComplete = tasks.find(t => t.id === id);
        if (!taskToComplete) return;
        taskToComplete = { ...taskToComplete, isCompleted: !taskToComplete.isCompleted };
        dispatch(updateTodo(taskToComplete));
    }
    const handleAddButtonPress = () => {
        setModalVisibility(true)
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleTaskChangeText = (task: string) => {
        setTaskInput(task);
    }
    const handleSubmit = () => {
        if (!taskInput.trim()) return;
        console.log("dateInput", dateInput)
        const newTask: Task = { categorty: "Personal", date: dateInput ? dateInput.toJSON() : null, id: uuid(), name: taskInput, isCompleted: false, subTasks: [] }
        dispatch(addTodo(newTask));
        setTaskInput("");
    }
    const handleConfirmDate = (date: Date) => {
        console.log('handle')
        setDateInput(date);
        hideDatePicker();
    };
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    return (
        <View style={[CommonStyles.container]}>
            <View>
                <Text style={CommonStyles.title}>Today</Text>
                <FlatList
                    data={uncompletedTasks}
                    renderItem={({ item }) => <TaskCard task={item} onRadioPress={toggleComplete} />}
                    keyExtractor={(item) => item.id}
                />
                {todayTasks.length <= 0 && <NoTaskCard />}
                <Text style={CommonStyles.title}>Completed</Text>
                <FlatList
                    data={completedTasks}
                    renderItem={({ item }) => <TaskCard task={item} onRadioPress={toggleComplete} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <TouchableOpacity style={styles.plus_button} activeOpacity={0.5} onPress={handleAddButtonPress}>
                <Icon name="plus" size={24} color={Colors.white} />
            </TouchableOpacity>
            <Modal visible={modalVisibility} transparent={true} onRequestClose={() => setModalVisibility(false)} animationType="fade">
                <StatusBar backgroundColor='rgba(0,0,0,0.4)' />
                <Pressable style={[styles.modal_container]} onPress={() => setModalVisibility(false)}>
                    <Pressable>
                        <KeyboardAvoidingView style={styles.modal} behavior="padding">
                            <View style={styles.input_container}>
                                <TextInput placeholder="Input new task here" style={styles.input} value={taskInput} onChangeText={handleTaskChangeText} />
                            </View>
                            <View style={styles.input_button_container}>
                                <View style={styles.input_button_container_left}>
                                    {/* <View style={styles.category_input}><Text>No Category</Text></View> */}
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <Icon name="calendar" size={24} />
                                    </TouchableOpacity>
                                    <DateTimePickerModal
                                        isVisible={datePickerVisibility}
                                        mode="date"
                                        onConfirm={handleConfirmDate}
                                        onCancel={hideDatePicker}
                                        minimumDate={new Date()} />
                                    {/* <Icon name="flow-cascade" size={24} /> */}
                                </View>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <FontAwesome5Icon name="chevron-circle-right" color={Colors.dark_grey} size={50} />
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Tasks;