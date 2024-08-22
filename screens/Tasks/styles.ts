import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    plus_button:{
        height:70,
        aspectRatio:1,
        backgroundColor:Colors.dark_grey,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom: 30,
        right: 30
    },
    modal_container:{
        justifyContent:'flex-end',
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex:1
    },
    modal:{
        backgroundColor:Colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    modal_placeholder:{
        flex:1
    },
    input_container:{
        marginTop: 10,
        marginHorizontal:10,
        borderRadius: 10,
        backgroundColor:Colors.light_grey,
        padding: 10,
        marginBottom: 10
    },
    input:{
        fontSize: 16
    },
    input_button_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 10,
    },
    input_button_container_left:{
        flexDirection:'row',
        gap: 20,
        alignItems:'center'
    },
    category_input:{
        paddingHorizontal:10,
        backgroundColor:Colors.light_grey,
        borderRadius: 30,
        paddingVertical:8
    }
})

export default styles;