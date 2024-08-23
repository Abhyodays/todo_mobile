import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    card:{
        backgroundColor:Colors.light_grey,
        paddingVertical:25,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        fontSize: 24,
        marginRight: 20
    },
    text:{
        fontSize: 20,
        color:Colors.black
    }
})

export default styles