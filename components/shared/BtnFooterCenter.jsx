import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default BtnFooterCenter = ({ background }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: background }}
      activeOpacity={0.8}
    >
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    "height": 40,
    "width": 70,
    "borderRadius": 20,
  },
});
