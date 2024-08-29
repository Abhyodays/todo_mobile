import { TouchableOpacity, View } from "react-native"
import styles from "./styles"
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from "../../constants/Colors"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { MainStackParam } from "../../types/MainStackParamList"
const Header = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParam>>();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrow-back" color={Colors.black} size={24} testID="back_button" />
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Icon name="ellipsis-vertical" color={Colors.black} size={24} />
            </TouchableOpacity> */}

        </View>
    )
}

export default Header;