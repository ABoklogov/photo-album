import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

export const signUpUser = ({
  login,
  email,
  password
}) => async (dispatch, getState) => {
  try {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("🚀 ~ signUpUser ~ user", user)

  } catch (error) {
    console.log(error);
    console.log(error.massage);
  };
};

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

export const signOutUser = () => async (dispatch, getState) => {

};
