import { Text, View } from "react-native"
import CommonStyles from "../styles";
import { styles } from "./styles";
import TaskOverviewCard from "../../components/TaskOverviewCard/TaskOverviewCard";
import { useAppSelector } from "../../hooks/redux_hooks";

const Options = () => {
    const tasks = useAppSelector(state => state.todos);
    const complete = tasks.filter(t => t.isCompleted).length;
    const pending = tasks.length - complete
    return (
        <View style={CommonStyles.container}>
            <Text style={styles.title}>Tasks Overview</Text>
            <View style={styles.card_container}>
                <TaskOverviewCard label="Completed Tasks" value={complete} />
                <TaskOverviewCard label="Pending Tasks" value={pending} />
            </View>
        </View>
    )
}

export default Options;