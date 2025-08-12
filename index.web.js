import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

/* React native vector icons styles inject handling --> Need this for ttf loading */
// Generate the required CSS
import IonIconsFont from "@react-native-vector-icons/ionicons/fonts/Ionicons.ttf";
const ionIconsFontStyles = `@font-face {
  src: url(${IonIconsFont});
  font-family: Ionicons;
}`;

// Create a stylesheet
const style = document.createElement("style");
style.type = "text/css";

// Append the iconFontStyles to the stylesheet
if (style.styleSheet) {
  style.styleSheet.cssText = ionIconsFontStyles;
} else {
  style.appendChild(document.createTextNode(ionIconsFontStyles));
}

// Inject the stylesheet into the document head
document.head.appendChild(style);
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
