import { Text, TextInput, TouchableOpacity, View } from "react-native"
import CommonStyles from "../styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import Header from "../../components/Header/Header";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Task } from "../../types/Task";
import { updateTodo } from "../../redux/thunks/todoThunks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavParamList } from "../../types/StackNavParamList";
import TaskDetailsOption from "../../components/TaskDetailsOption/TaskDetailsOption";
import { Colors } from "../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons'


const TaskDetails = ({ route }: any) => {
    const navigation = useNavigation<StackNavigationProp<StackNavParamList>>();
    const id = route?.params?.id;
    const todo = useAppSelector(state => state.todos).find(t => t.id === id);
    const [textInput, setTextInput] = useState<string>(todo?.name || "");
    const dispatch = useAppDispatch();
    const handleUpdate = () => {
        if (!todo) return;
        console.log("textInput:", textInput)
        const updatedTask: Task = {
            ...todo,
            name: textInput
        }
        console.log("updating:", updatedTask)
        dispatch(updateTodo(updatedTask))
    }
    const goBack = () => {
        navigation.goBack();
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', handleUpdate)
        return () => {
            unsubscribe();
        }
    }, [navigation, textInput])
    console.log(textInput)
    return (
        <View style={CommonStyles.container}>
            <View style={styles.header_container}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" color={Colors.black} size={24} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.text_input_container}>
                <TextInput multiline={true} style={styles.text_input}
                    value={textInput}
                    onChangeText={(text) => setTextInput(text)}
                />
            </ScrollView>
            <View>
                <TaskDetailsOption icon="calendar-sharp" title="Due Date" value={todo?.date || "No Date"} />
            </View>
        </View>
    )
}

export default TaskDetails;