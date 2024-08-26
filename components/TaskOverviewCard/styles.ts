import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    card:{
        height: 150,
        width: 190,
        backgroundColor: Colors.light_grey,
        borderRadius: 20,
        padding: 20,
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    value:{
        fontSize: 48,
        color: Colors.black
    },
    label:{
        fontSize: 16
    }
})

export default styles;