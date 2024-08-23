import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    card:{
        paddingVertical: 20,
        paddingHorizontal:10,
        backgroundColor: Colors.light_grey,
        marginBottom: 10,
        borderRadius: 10
    },
    text:{
        fontSize: 20
    },
    text_completed:{
        textDecorationLine:'line-through'
    }
})
export default styles;