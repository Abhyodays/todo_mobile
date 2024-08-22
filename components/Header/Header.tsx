import { TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackNavParamList } from "../../types/TaskStackNavParamList"
const Header = () => {
    const navigation = useNavigation<StackNavigationProp<StackNavParamList>>();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrow-back" color={Colors.black} size={24} />
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Icon name="ellipsis-vertical" color={Colors.black} size={24} />
            </TouchableOpacity> */}

        </View>
    )
}

export default Header;