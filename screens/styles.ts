import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const CommonStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:16
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        color: Colors.black,
        marginBottom: 20
    },
    link:{
        textDecorationLine:'underline',
        color:'red',
        fontSize: 16
    }
})

export default CommonStyles;