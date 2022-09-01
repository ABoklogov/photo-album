import {
  StyleSheet,
  View,
  Text,
} from "react-native";
import PostPhoto from '../../components/PostPhoto';
import Footer from '../../components/Footer';
import BtnUploadPhoto from '../../components/shared/BtnUploadPhoto';
import CreatePostForm from "../../components/CreatePostForm";

export default CreatePostsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PostPhoto />

      <View style={styles.btnUploadPhoto}>
        <BtnUploadPhoto />
        <CreatePostForm />
      </View>
      <Footer />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingTop: 32,
    paddingBottom: 83,
    // paddingRight: 16,
    // paddingLeft: 16,
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  btnUploadPhoto: {
    marginTop: 8,

  },
});