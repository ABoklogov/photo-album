import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
} from "react-native";
import BtnFooterCenter from "./shared/BtnFooterCenter";
import RemoveIcon from './icons/RemoveIcon';

export default Footer = () => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.footer}
    >
      <BtnFooterCenter background={'#F6F6F6'}>
        <RemoveIcon />
      </BtnFooterCenter>
    </View>
  )
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 83,
    width: '100%',
    "paddingBottom": 34,
    "paddingTop": 9,
    marginTop: 'auto',
  },
});