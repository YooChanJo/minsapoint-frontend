/* Vendors */
import { createContext, useContext, useState, ReactNode } from "react";
import {
  FirebaseAuthTypes,
  onAuthStateChanged,
} from "@react-native-firebase/auth";

/* Configs */
import { firebaseAuth } from "@/src/config/firebase";

/* APIs */
import NavigationAPI from "@/src/api/navigation";

/* Todo change this */
type UserType = "Unauthorized" | "Admin" | "User" | string;

interface AuthContextType {
  currentUser: FirebaseAuthTypes.User | null;
  userLoggedIn: boolean;
  accessToken: string;
  userType: UserType;
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
  const [userType, setUserType] = useState<UserType>("Unauthorized");
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
    }

    // Optional: Fetch user type from backend
    // try {
    //   const userInfo = await userService.getUserInfo(token);
    //   setUserType(userInfo.userType);
    // } catch (err) {
    //   console.error("AuthProvider error: ", err);
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
