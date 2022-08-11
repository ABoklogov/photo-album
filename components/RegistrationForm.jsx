import { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AddAvatar from '../components/icons/AddAvatar';

const RegistrationForm = () => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isAddAvatar, setIsAddAvatar] = useState(false);

  const addAvatar = () => {
    setIsAddAvatar(!isAddAvatar);
  };
  const removesKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={removesKeyboard}>
      <View style={{
        ...styles.wrapper,
        paddingTop: isShowKeyboard ? 166 : 263,
      }}>
        <View style={styles.containerForm}>
          <View style={styles.avatarBlock}>
            <TouchableOpacity
              // меняем стили кнопки взависимовти от того добавлен ли аватар или нет:
              style={isAddAvatar ? {
                ...styles.btnAvatar,
                transform: [
                  { translateX: -13 },
                  { translateY: 0 },
                  { rotate: '45deg' },
                ],
              } : styles.btnAvatar}
              activeOpacity={0.8}
              onPress={addAvatar}
            >
              <AddAvatar color={isAddAvatar ? '#BDBDBD' : '#56C330'} />
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
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default RegistrationForm;

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  containerForm: {
    height: '100%',
    paddingBottom: 78,
    paddingTop: 92,
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