import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { updateUserProfile, userStateChange } from './userSlice';

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
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    dispatch(userStateChange({ stateChange: true }));
    dispatch(updateUserProfile({
      idUser: user.uid,
      nickName: user.displayName,
      email: user.email,
    }));

  } catch (error) {
    console.log(error);
    console.log(error.massage);
  };
};

// выход
export const signOutUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  await signOut(auth);
  dispatch(userStateChange({ stateChange: false }));
};

// обновление текущего юзера
export const stateChangeUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  await onAuthStateChanged(auth, (user) => {
    // проверяем, если такой user есть, обновляем стейт
    if (user) {
      dispatch(userStateChange({ stateChange: true }));
      dispatch(updateUserProfile({
        idUser: user.uid,
        nickName: user.displayName,
        email: user.email,
      }));
    }
    // setUser(user);
    // setIsLoading(true);
  });
};