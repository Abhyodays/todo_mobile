import { Text, View } from "react-native"
import { Task } from "../../types/Task";
import styles from "./styles";
import CommonStyles from "../styles";
import { FlatList, TextInput } from "react-native";
import { useState } from "react";
import CalendarTaskCard from "../../components/CalendarTaskCard/CalendarTaskCard";
import { useAppSelector } from "../../hooks/redux_hooks";
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const allTodos = useAppSelector(state => state.todos)
    const [todos, setTodos] = useState<Task[]>([])
    const search = (q: string) => {
        if (q.trim().length === 0) {
            setTodos([]);
            return;
        }
        const queriedTodos = allTodos.filter(t => t.name.includes(q));
        setTodos(queriedTodos)
    }
    const handleChange = (text: string) => {
        setSearchInput(text);
    }
    const handleClear = () => {
        setSearchInput("");
        search("");
    }
    return (
        <View style={CommonStyles.container}>
            <View style={styles.search_container}>
                <TextInput style={styles.search_input} placeholder="Search todos"
                    onChangeText={handleChange}
                    onEndEditing={() => search(searchInput)}
                    value={searchInput}
                    keyboardType="web-search"
                />
                {
                    searchInput.length > 0 &&
                    <Icon name="close" size={24} onPress={handleClear} />
                }
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <CalendarTaskCard task={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>

    )
}
export default Search;