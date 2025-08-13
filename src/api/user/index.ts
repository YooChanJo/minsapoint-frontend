import { firebaseAuth } from "@/src/config/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "@react-native-firebase/auth";

export type BackendUserRole = "STUDENT" | "ACCUSER" | "DEPT_OF_JUSTICE" | "ADMIN";

export interface BackendUser {
  _id: string; // id offered by firestore
  firebase_uid: string; // id offered by firebase authentication
  role: BackendUserRole;
  name: string;
  studentNumber?: number;
  schoolPoints?: number;
  dormPoints?: number;
  rewardPoints?: number;
  totalPoints?: number;
  hasCourt?: boolean;
}

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
      console.error("UserAPI signUserOut Func: ", e);
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
