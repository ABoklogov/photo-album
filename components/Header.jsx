import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import BtnLogOut from 'components/shared/BtnLogOut';
import BtnBack from "components/shared/BtnBack";
import {
  strings,
  colors,
  fonts,
  sizeText
} from 'res/vars.js';

export default Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>{title}</Text>

        {
          title === strings.headerTitlePosts &&
          <View style={styles.logOutBtn}>
            <BtnLogOut />
          </View>
        }

        {
          title === strings.headerTitleCreatePosts &&
          <View style={styles.backBtn}>
            <BtnBack />
          </View>
        }

        {
          title === strings.headerTitleComments &&
          <View style={styles.backBtn}>
            <BtnBack />
          </View>
        }

        {
          title === strings.headerTitleMap &&
          <View style={styles.backBtn}>
            <BtnBack />
          </View>
        }

        {
          title === strings.headerTitleCamera &&
          <View style={styles.backBtn}>
            <BtnBack />
          </View>
        }
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    paddingTop: 55,
    paddingBottom: 11,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderGrey,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: sizeText.medium,
    lineHeight: 22,
    fontStyle: 'normal',
    textAlign: 'center',
    color: colors.black,
  },
  logOutBtn: {
    position: 'absolute',
    right: 10,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
  },
})