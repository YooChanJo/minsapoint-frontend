import { Platform } from "react-native";

/* All platform specific api app operations go here */
const PlatformAPI: { getCurrentPlatform: Function } = {
  /* Returns a string of "web", "android", "ios" */
  getCurrentPlatform: () => Platform.OS,
};

export default PlatformAPI;
