import { getStateFromPath, LinkingOptions } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  NotFound: undefined;

  StudentHome: undefined;
  StudentSettings: undefined;
  StudentHistory: undefined;
  StudentAlerts: undefined;

  TeacherHome: undefined;
  TeacherSettings: undefined;
  TeacherHistory: undefined;
  TeacherPenaltyPoints: undefined;
  TeacherRewardPoints: undefined;

  DeptOfJHome: undefined;

  /* Debug screens */
  Home: undefined;
  PlatformCheck: { myParam: string };
};

export const AppLinking: LinkingOptions<RootStackParamList> = {
  /* Is not needed for web */
  prefixes: [
    /* your linking prefixes */
    "http://10.0.2.2:8081", // When using android emulator
    "http://192.168.0.42:8081", // When remote connecting --> Needs constant fixing
    "example://", // only for debug must remove (ios)
    // 'https://xyz.ngrok.io', // deploy
  ],
  // filter: (url) => !url.includes('+expo-auth-session'), // for filtering out unwanted paths
  config: {
    screens: {
      Login: "/login",

      /* Student */
      StudentHome: "/student",
      StudentSettings: "/student/settings",
      StudentHistory: "/student/history",
      StudentAlerts: "/student/alerts",

      /* Teacher */
      TeacherHome: "/teacher",
      TeacherSettings: "/teacher/settings",
      TeacherHistory: "/teacher/history",
      TeacherPenaltyPoints: "teacher/penalty-points",
      TeacherRewardPoints: "teacher/reward-points",

      /* DeptOfJ */
      DeptOfJHome: "/dept-of-j",

      /* Debug screens */
      Home: "/",
      PlatformCheck: "/platform-check/:myParam",
    },
  },
  /* Unknown path handling */
  getStateFromPath: (path, options) => {
    const state = getStateFromPath(path, options);
    if (!state) {
      return {
        routes: [{ name: "NotFound" }],
      };
    }
    return state;
  },
};
