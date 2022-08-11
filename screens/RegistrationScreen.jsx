import {
  StyleSheet,
} from "react-native";
import Background from '../components/shared/Background';
import RegistrationForm from "../components/RegistrationForm";

const image = require('../assets/images/photo_BG.jpg');

const RegistrationScreen = () => {
  return (
    <Background image={image}>
      <RegistrationForm />
    </Background>
  )
};

const styles = StyleSheet.create({

});

export default RegistrationScreen;