/* 
  ToDo: Currently all color styles are inconsistent, and dark mode is not correctly configured
  ToDo: Currently fonts are inconsistent, please match all fonts
  ToDo: Currently comments aren't fully applied, fill in all the blank comments

  Advice: I believe the colors are too bright, consider downgrading it.
  Advice: Consider making a color theme idea before configuring.
*/


/* All ui-themes are specified here */
import { ImageStyle, TextStyle, ViewStyle } from "react-native";


/* Colors */
const tintColorLight = "#000000";
const tintColorDark = "#FFFFFF";
export const Colors = {
  light: {
    text: "#11181C",
    background: "#FFFFFF",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    border: "#CCCCCC",
    card: "#F8F9FA",
    button: "#000000",
    buttonText: "#FFFFFF",
    success: "#2ECC71",
    error: "#E74C3C",
    notificationBadge: "#E74C3C",
    notificationText: "#FFFFFF",
    menuItemBottomColor: "#EEEEEE",
    warning: "#F39C12",
    inputBackground: "#F1F3F5",
    inputText: "#11181C",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    border: "#2E2F31",
    card: "#1F2022",
    button: "#FFFFFF",
    buttonText: "#0A7EA4",
    success: "#2ECC71",
    error: "#E74C3C",
    notificationBadge: "#E74C3C",
    notificationText: "#FFFFFF",
    menuItemBottomColor: "#2A2B2D",
    warning: "#F39C12",
    inputBackground: "#1C1E20",
    inputText: "#ECEDEE",
  },
};

/* Fonts */
export const Fonts = {
  regular: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  bold: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  heading: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
  },
};

/* element styles */
type StyleSet = {
  container: ViewStyle;
  inputWrapper: ViewStyle;
  input: TextStyle;
  togglebutton: ViewStyle;
  topBar: ViewStyle;
  appTitle: TextStyle;
  rightProfileSection: ViewStyle;
  notification: ViewStyle;
  notificationBadge: ViewStyle;
  notificationText: TextStyle;
  shadowBox: ViewStyle;
  titleText: TextStyle;
  subtitleText: TextStyle;
  labelText: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  profileRow: ViewStyle;
  profileImage: ImageStyle;
  profileTextContainer: ViewStyle;
  profileName: TextStyle;
  settingsIcon: ViewStyle;
  summaryBox: ViewStyle;
  smallGrayText: TextStyle;
  boldBlackText: TextStyle;
  menuWrapper: ViewStyle;
  menuItem: ViewStyle;
  iconWithText: ViewStyle;
  menuTitle: TextStyle;
  menuSubtitle: TextStyle;
  scoreSection: ViewStyle;
  grayLabel: TextStyle;
  bigScore: TextStyle;
  subScores: ViewStyle;
  scoreItem: ViewStyle;
  label: TextStyle;
  value: TextStyle;
  modalBackdrop: ViewStyle;
  modalBox: ViewStyle;
  modalTitle: TextStyle;
  modalContent: TextStyle;
  cancelButton: ViewStyle;
  closeButton: ViewStyle;
  itemCard: ViewStyle;
  itemTitle: TextStyle;
  itemSub: TextStyle;
  infoBox: ViewStyle;
  infoTitle: TextStyle;
  infoText: TextStyle;
  logoutButton: ViewStyle;
  homeButton: ViewStyle;
  logoutButtonText: TextStyle;
  header: ViewStyle;
  headerLeft: ViewStyle;
  headerRight: ViewStyle;
  formBox: ViewStyle;
  pickerWrapper: ViewStyle;
};

function createCommonStyles(colors: typeof Colors.light): StyleSet {
  return {
    /* Entire wrapper of screen */
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 24,
    },
    /* A View element wrapping input element */
    inputWrapper: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 16,
      backgroundColor: colors.background,
    },
    /* Text input element */
    input: {
      backgroundColor: colors.inputBackground,
      color: colors.inputText,
    },
    /* Toggling button for checking */
    togglebutton: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 20,
    },
    /* Used for the top bar containing app name and navigation in student page */
    topBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    /* Used inside top bar marking the app name: Minsapoint */
    appTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.text,
    },
    /* A View element that contains a setting icon pointing to account settings in student */
    rightProfileSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    /* A TouchableOpacity element in student screen containing notification icon */
    notification: {
      position: "absolute",
      top: 60,
      left: 24,
    },
    /* A small icon indicating how much alerts there are currently, stuck right above notification icon */
    notificationBadge: {
      position: "absolute",
      top: -6,
      right: -6,
      backgroundColor: colors.notificationBadge,
      borderRadius: 8,
      paddingHorizontal: 4,
      paddingVertical: 1,
    },
    /* The text indicating the number of alerts inside notification Badge */
    notificationText: {
      color: colors.notificationText,
      fontSize: 10,
      fontWeight: "bold",
    },
    /* Currently not used */
    shadowBox: {
      backgroundColor: colors.card,
      paddingVertical: 24,
      borderRadius: 12,
      alignItems: "center",
    },
    /* Somehow resembles app title, but i do not know the point of this element */
    titleText: {
      ...Fonts.heading,
      color: colors.text,
      fontSize: 26,
      textAlign: "left",
      marginTop: 16,
      marginBottom: 16,
    },
    subtitleText: {
      ...Fonts.bold,
      color: colors.text,
      fontSize: 30,
      textAlign: "center",
    },
    labelText: {
      ...Fonts.regular,
      color: colors.text,
      alignItems: "center",
    },
    /* Button background */
    button: {
      backgroundColor: colors.button,
      borderRadius: 8,
      paddingVertical: 20,
      marginTop: 30,
      alignItems: "center",
    },
    /* Text inside button */
    buttonText: {
      ...Fonts.bold,
      color: colors.buttonText,
      paddingHorizontal: 25,
    },
    /* A View element containing teacher profile */
    profileRow: {
      flexDirection: "row-reverse",
      alignItems: "center",
      marginBottom: 20,
    },
    /* Teacher pofile elements*/
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginLeft: 8,
    },
    profileTextContainer: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
    profileName: {
      ...Fonts.bold,
      fontSize: 16,
      color: colors.text,
    },
    /*****************Please fill in the rest comments too*******************/
    settingsIcon: {
      marginLeft: 8,
      marginTop: 20,
      backgroundColor: colors.card,
      padding: 6,
      borderRadius: 20,
    },
    summaryBox: {
      marginBottom: 24,
    },
    smallGrayText: {
      ...Fonts.regular,
      fontSize: 14,
      color: colors.tint,
    },
    boldBlackText: {
      ...Fonts.bold,
      fontSize: 16,
      color: colors.text,
    },
    menuWrapper: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    menuItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 18,
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: colors.menuItemBottomColor,
    },
    iconWithText: {
      flexDirection: "row",
      alignItems: "center",
    },
    menuTitle: {
      ...Fonts.bold,
      fontSize: 16,
      color: colors.text,
    },
    menuSubtitle: {
      ...Fonts.regular,
      fontSize: 12,
      color: colors.tint,
    },
    scoreSection: {
      alignItems: "center",
      marginTop: 100,
    },
    grayLabel: {
      color: colors.icon,
      fontSize: 16,
      marginBottom: 8,
    },
    bigScore: {
      fontSize: 64,
      fontWeight: "bold",
      color: colors.text,
    },
    subScores: {
      marginTop: 32,
      gap: 16,
    },
    scoreItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: 120,
    },
    label: {
      fontSize: 18,
      color: colors.text,
    },
    value: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    modalBackdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.2)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalBox: {
      backgroundColor: colors.card,
      borderRadius: 16,
      padding: 20,
      width: "85%",
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      color: colors.text,
    },
    modalContent: {
      fontSize: 16,
      marginBottom: 15,
      color: colors.text,
    },
    cancelButton: {
      backgroundColor: colors.tint,
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 6,
      marginRight: 8,
    },
    closeButton: {
      backgroundColor: colors.card,
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 6,
    },
    itemCard: {
      padding: 16,
      backgroundColor: colors.card,
      borderRadius: 12,
      marginBottom: 12,
    },
    itemTitle: {
      fontWeight: "bold",
      fontSize: 16,
      color: colors.text,
    },
    itemSub: {
      color: colors.tint,
      marginTop: 4,
    },
    infoBox: {
      marginTop: 60,
      backgroundColor: colors.card,
      padding: 20,
      borderRadius: 12,
      gap: 12,
    },
    infoTitle: {
      fontSize: 14,
      color: colors.tint,
      fontWeight: "bold",
    },
    infoText: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 8,
    },
    logoutButton: {
      backgroundColor: "#FF3B30",
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 30,
    },
    homeButton: {
      backgroundColor: colors.button,
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 30,
    },
    logoutButtonText: {
      color: colors.buttonText,
      fontSize: 16,
      textAlign: "center",
      fontWeight: "bold",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    headerRight: {
      flexDirection: "row",
      alignItems: "center",
    },
    formBox: {
      backgroundColor: colors.inputBackground,
      padding: 20,
      borderRadius: 12,
      gap: 12,
    },
    pickerWrapper: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 12,
    },
  };
}

export const CommonStyles = {
  light: createCommonStyles(Colors.light),
  dark: createCommonStyles(Colors.dark),
};
