import { Text, View } from "react-native"
import styles from "./styles"

type HighlightTextProps = {
    text?: string
}

const HighlightText = ({ text }: HighlightTextProps) => {
    return (
        <View style={styles.container}>
            {text && <Text style={styles.text}>{text}</Text>}
        </View>
    )
}

export default HighlightText;