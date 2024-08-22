import { Text, View } from "react-native"
import styles from "./styles";

const NoTaskCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>There are are no tasks here, click on '+' to add tasks.</Text>
        </View>
    )
}

export default NoTaskCard;