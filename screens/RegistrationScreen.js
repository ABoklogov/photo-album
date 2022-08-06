import { useState, useEffect } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Linking,
} from "react-native";
// import { Button } from 'react-native-web';

const RegistrationScreen = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const addAvatar = () => {
    console.log('Добавили аватар');
  };
  // console.log("🚀 ~ RegistrationScreen ~ isShowKeyboard", isShowKeyboard)
  // useEffect(() => {
  //   setIsShowKeyboard(false)
  // }, [isShowKeyboard]);
  // console.log("🚀 ~ RegistrationScreen ~ isShowKeyboard", isShowKeyboard ? -20 : 66)
  // console.log('rrrrr');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require('../assets/images/photo_BG.jpg')}
        style={styles.imageBackground}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              ...styles.containerForm,
              // marginBottom: isShowKeyboard ? -90 : -100
            }}
          >
            <View style={styles.avatarBlock}>
              <TouchableOpacity
                style={styles.btnAvatar}
                // title="добавить аватар"
                onPress={addAvatar}
              >
                <Image source={require('../assets/icons/add-avatar.svg')} />
              </TouchableOpacity>
            </View>

            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <Text style={{ ...styles.title, marginBottom: 33 }}>Регистрация</Text>

              <View style={{ ...styles.form, marginBottom: 16 }}>
                <TextInput
                  style={{ ...styles.input, marginBottom: 16 }}
                  textAlign={'left'}
                  placeholder={'Логин'}
                  onFocus={() => setIsShowKeyboard(true)}
                />

                <TextInput
                  style={{ ...styles.input, marginBottom: 16 }}
                  textAlign={'left'}
                  placeholder={'Адрес электронной почты'}
                  onFocus={() => setIsShowKeyboard(true)}
                />

                <View style={styles.inputPassword}>
                  <TextInput
                    style={styles.input}
                    textAlign={'left'}
                    secureTextEntry={isHiddenPassword}
                    placeholder={'Пароль'}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                  <TouchableOpacity
                    style={{ ...styles.inputPasswordBtn, marginBottom: 16 }}
                    activeOpacity={0.8}
                    onPress={() => setIsHiddenPassword(!isHiddenPassword)}
                  >
                    <Text style={styles.inputPasswordBtnText}>
                      {isHiddenPassword ? 'Показать' : 'Скрыть'}
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnText}
                  >
                    Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.inputPasswordBtnText}>Уже есть аккаунт? Войти</Text>
              </View>
            </KeyboardAvoidingView>
          </View >
        </TouchableWithoutFeedback>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  imageBackground: {
    paddingTop: 263,
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: 'center',
    resizeMode: "cover",
  },
  containerForm: {
    position: 'relative',
    paddingTop: 92,
    paddingBottom: 66,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarBlock: {
    position: 'absolute',
    left: '50%',
    transform: [
      { translateX: -60 },
      { translateY: -60 },
    ],
    backgroundColor: '#F6F6F6',
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  btnAvatar: {
    position: 'absolute',
    bottom: 14,
    left: '100%',
    transform: [
      { translateX: -13 },
      { translateY: 0 },
    ],
    height: 25,
    width: 25,
    backgroundColor: 'tomato',
  },
  title: {
    fontSize: 30,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#212121',
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    height: 50,
    padding: 15,
    color: '#212121',
    backgroundColor: '#F6F6F6',
  },
  inputPassword: {
    position: 'relative',
  },
  inputPasswordBtn: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: [
      { translateX: 0 },
      { translateY: -10 },
    ]
  },
  inputPasswordBtnText: {
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 19,
    color: '#0097ff',
  },
  btn: {
    height: 51,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#56C330',
    marginTop: 43,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',

    ...Platform.select({
      ios: {
        backgroundColor: 'transparent'
      },
      android: {
        backgroundColor: '#56C330'
      },
    })
  },
  btnText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        color: '#56C330',
      },
      android: {
        color: '#fff',
      },
    }),
  }
});

export default RegistrationScreen;