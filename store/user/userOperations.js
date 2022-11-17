import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { updateUserProfile } from './userSlice';

// регистрация
export const signUpUser = ({
  email,
  password,
  nickName,
}) => async (dispatch, getState) => {
  try {
    // регистрируем пользователя
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    // обновляем имя пользователя
    const user = await getAuth().currentUser;
    await updateProfile(user, {
      displayName: nickName,
    });
    // забираем данные пользователя 
    const { uid, displayName, email: currentEmail } = await getAuth().currentUser;
    // и записываем данные в state
    dispatch(updateUserProfile({
      idUser: uid,
      nickName: displayName,
      email: currentEmail,
    }));
  } catch (error) {
    console.log(error);
    console.log(error.massage);
  };
};

// логинизация
export const signIpUser = ({
  email,
  password
}) => async (dispatch, getState) => {
  try {
    const auth = getAuth();
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("🚀 ~ signIpUser ~ user", user)

  } catch (error) {
    console.log(error);
    console.log(error.massage);
  };
};

// выход
export const signOutUser = () => async (dispatch, getState) => {

};

// обновление текуущего юзера
export const stateChangeUser = () => async (dispatch, getState) => {
  // const auth = getAuth();
  // await onAuthStateChanged(auth, (user) => {
  //   setUser(user);
  //   setIsLoading(true);
  // });
};