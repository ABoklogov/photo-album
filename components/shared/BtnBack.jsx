import {
  TouchableOpacity,
} from "react-native";
import ArrowLeft from '../icons/ArrowLeft';

export default BtnBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.goBack()}
    >
      <ArrowLeft />
    </TouchableOpacity>
  )
};