import { Text, View } from "react-native"
import styles from "./styles"

type TaskOverviewCardProp = {
    value: number,
    label: string
}
const TaskOverviewCard = ({ label, value }: TaskOverviewCardProp) => {
    return (
        <View style={styles.card}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}
export default TaskOverviewCard;