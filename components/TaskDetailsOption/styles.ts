import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderTopWidth:1,
        borderBottomWidth:1,
        paddingVertical: 15,
        borderColor:Colors.light_grey,
        alignItems:'center',
        justifyContent:'space-between'
    },
    container_left:{
        flexDirection:'row',
        alignItems:'center',
        gap: 20
    },
    title:{
        fontSize: 16
    }
})

export default styles;