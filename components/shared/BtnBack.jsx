import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
} from "react-native";
import ArrowLeft from 'icons/ArrowLeft';

export default BtnBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.goBack()}
    >
      <ArrowLeft />
    </TouchableOpacity>
  )
};