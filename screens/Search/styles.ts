import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    search_container:{
        borderBottomWidth: 2,
        borderColor: Colors.dark_grey,
        // borderRadius:10,
        flexDirection:'row',
        marginBottom: 20,
        justifyContent:'space-between',
        alignItems:'center'

    },
    search_input:{
        fontSize: 20
    }
})

export default styles;