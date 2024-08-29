import { Text, View } from "react-native"
import styles from "./styles";

const NoTaskCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} testID="NoTaskCard_text">There are are no tasks here, click on '+' to add tasks.</Text>
        </View>
    )
}

export default NoTaskCard;