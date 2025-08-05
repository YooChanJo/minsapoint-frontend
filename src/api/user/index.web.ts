import { firebaseAuth } from "@/src/config/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";

const UserAPI: {
  signUserIn: Function;
  signUserOut: Function;
  changeUserPassword: Function;
} = {
  signUserIn: async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.error("UserAPI signUserIn Func: ", e);
      throw e;
    }
  },
  signUserOut: async () => {
    try {
      return await signOut(firebaseAuth);
    } catch (e) {
      console.error("UserAPI signUserOut Func", e);
      throw e;
    }
  },
  changeUserPassword: async (newPassword: string) => {
    try {
      if (!firebaseAuth.currentUser)
        throw new Error("Firebase Auth Error: currentUser does not exist");
      return await updatePassword(firebaseAuth.currentUser, newPassword);
    } catch (e) {
      console.error("UserAPI: changeUserPassword Func: ", e);
      throw e;
    }
  },
};

export default UserAPI;
