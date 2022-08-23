import {
  StyleSheet,
  View,
} from "react-native";

export default BtnFooterCenter = ({ background, children }) => {
  return (
    <View
      style={{ ...styles.button, backgroundColor: background }}
    >
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    "height": 40,
    "width": 70,
    "borderRadius": 20,
  },
});
