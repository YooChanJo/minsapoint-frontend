import { firebaseAuth } from "@/src/config/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
} from "@react-native-firebase/auth";

const UserAPI: { signUserIn: Function; signUserOut: Function } = {
  signUserIn: async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (e) {
      console.error("UserAPI signUserIn Func: ", e);
    }
  },
  signUserOut: async () => {
    try {
      return await signOut(firebaseAuth);
    } catch (e) {
      console.error("UserAPI signUserOut Func: ", e);
    }
  },
};

export default UserAPI;
