/* Vendors */
import { createContext, useContext, useState, ReactNode } from "react";
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from "@react-native-firebase/auth";

import NavigationAPI from "@/src/api/navigation";
import { firebaseAuth } from "@/src/config/firebase";
import { BackendUserRole } from "@/src/api/user";

export interface AuthContextType {
  currentUser: FirebaseAuthTypes.User | null;
  userLoggedIn: boolean;
  accessToken: string;
  userType: BackendUserRole | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<FirebaseAuthTypes.User | null>(
    null
  );
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [userType, setUserType] = useState<BackendUserRole | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function initializeUser(user: FirebaseAuthTypes.User | null) {
    if (user) {
      const token = await user.getIdToken();
      setAccessToken(token);
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setAccessToken("");
      setCurrentUser(null);
      setUserLoggedIn(false);
      setUserType(null);
    }

    // Optional: Fetch user type from backend
    // try {
    //   const userInfo = await userService.getUserInfo(token);
    //   setUserType(userInfo.userType);
    // } catch (err) {
    //   console.error("AuthProvider error: ", err);
    //   setUserType(null);
    // }

    setLoading(false);
  }

  NavigationAPI.useCompatibleEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, initializeUser);
    return unsubscribe;
  }, []);

  const authValue: AuthContextType = {
    currentUser,
    userLoggedIn,
    accessToken,
    userType,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
