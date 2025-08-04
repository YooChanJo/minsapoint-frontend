import { getStateFromPath, LinkingOptions } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  NotFound: undefined;

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
    // 'https://xyz.ngrok.io', // deploy
  ],
  // filter: (url) => !url.includes('+expo-auth-session'), // for filtering out unwanted paths
  config: {
    screens: {
      Login: "/login",

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
