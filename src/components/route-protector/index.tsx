import { useAuth } from "../auth-provider";
import { FC, useState } from "react";
import NavigationAPI from "@/src/api/navigation";
import UserAPI, { BackendUserRole } from "@/src/api/user";

/* Need distinction between wifi & server error etc --> add error handling */
/*
  Login screen for new users
  TODO: navigation.replace only replaces one element, and yeah when two or more errors occur, might want handling
*/
function RouteProtector(Screen: FC, role: BackendUserRole) {
  function ProtectedScreen(props: any) {
    const { userLoggedIn, accessToken } = useAuth();
    const navigation = NavigationAPI.useNavigationWithTS();
    const [loading, setLoading] = useState<boolean>(true);

    NavigationAPI.useCompatibleEffect(() => {
      async function init() {
        setLoading(true);
        if (!userLoggedIn) {
          console.error("User not logged in thus cannot access this route");
          navigation.replace("Login");
        } else {
          try {
            const currentUserInfo = await UserAPI.getCurrentUserInfo(accessToken);
            switch (currentUserInfo.role) {
              case "STUDENT":
                role === "STUDENT" || navigation.replace("StudentHome");
                break;
              case "ACCUSER":
                role === "ACCUSER" || navigation.replace("TeacherHome");
                break;
              case "DEPT_OF_JUSTICE":
                role === "DEPT_OF_JUSTICE" || navigation.replace("DeptOfJHome");
                break;
              case "ADMIN":
                role === "ADMIN" || navigation.replace("Home");
                break;
            }
          } catch (e) {
            console.error("Failed to get current user info: ", e);
            navigation.replace("Login");
          }
        }
        setLoading(false);
      }
      init();
    });

    return !loading && <Screen {...props} />;
  }
  return ProtectedScreen;
}

export { RouteProtector };
