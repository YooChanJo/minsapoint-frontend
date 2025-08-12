import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

/* React native vector icons styles inject handling --> Need this for ttf loading */
// Generate the required CSS
import IonIconsFont from "@react-native-vector-icons/ionicons/fonts/Ionicons.ttf";
import MaterialIconsFont from "@react-native-vector-icons/material-icons/fonts/MaterialIcons.ttf";
const fontStyles = `
  @font-face {
    src: url(${IonIconsFont});
    font-family: Ionicons;
  }
  @font-face {
    src: url(${MaterialIconsFont});
    font-family: MaterialIcons-Regular;
  }`;

// Create a stylesheet
const iconsStyle = document.createElement("style");
iconsStyle.type = "text/css";

// Append the iconFontStyles to the stylesheet
if (iconsStyle.styleSheet) {
  iconsStyle.styleSheet.cssText = fontStyles;
} else {
  iconsStyle.appendChild(document.createTextNode(fontStyles));
}

// Inject the stylesheet into the document head
document.head.appendChild(iconsStyle);
/* ************************************************ */

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById("app-root"),
});
/* Web entry point */
