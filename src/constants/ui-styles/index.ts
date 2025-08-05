/* All ui-themes are specified here */

/* Colors */
const tintColorLight = "#000000";
const tintColorDark = "#fff";
export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    border: "#E0E0E0",
    card: "#F8F9FA",
    button: "#000000",
    buttonText: "#ffffff",
    success: "#2ECC71",
    error: "#E74C3C",
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
    button: "#fff",
    buttonText: "#0a7ea4",
    success: "#2ECC71",
    error: "#E74C3C",
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
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
export const CommonStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 24,
  } as ViewStyle,
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#ccc", // 연한 회색 테두리
    borderRadius: 8, // 둥글게
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: "#fff", // 흰 배경
  },
  togglebutton: {
    flexDirection: "row",
    justifyContent: "flex-end", // 오른쪽 정렬
    alignItems: "center", // 세로 가운데 정렬
    marginTop: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  rightProfileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  notification: {
    position: "absolute",
    top: 60,
    left: 24,
  },
  notificationBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  notificationText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  shadowBox: {
    backgroundColor: Colors.light.card,
    paddingVertical: 24,
    borderRadius: 12,
    alignItems: "center" as const,
  } as ViewStyle,

  titleText: {
    ...Fonts.heading,
    color: Colors.light.text,
    fontSize: 26,
    textAlign: "left" as const,
    marginTop: 16,
    marginBottom: 16,
  } as TextStyle,

  subtitleText: {
    ...Fonts.bold,
    color: Colors.light.text,
    fontSize: 30,
    textAlign: "center" as const,
  } as TextStyle,

  labelText: {
    ...Fonts.regular,
    color: Colors.light.text,
    alignItems: "center" as const,
  } as TextStyle,

  input: {
    backgroundColor: Colors.light.inputBackground,
    color: Colors.light.inputText,
  } as ViewStyle,

  button: {
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    paddingVertical: 20,
    marginTop: 30,

    alignItems: "center" as const,
  } as ViewStyle,

  buttonText: {
    ...Fonts.bold,
    color: Colors.light.buttonText,
    paddingHorizontal: 25,
  } as TextStyle,

  // 프로필 관련
  profileRow: {
    flexDirection: "row-reverse", // 오른쪽 정렬
    alignItems: "center",
    marginBottom: 20,
  } as ViewStyle,

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  } as ImageStyle,

  profileTextContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  } as ViewStyle,

  profileName: {
    ...Fonts.bold,
    fontSize: 16,
    color: Colors.light.text,
  } as TextStyle,

  settingsIcon: {
    marginLeft: 8,
    marginTop: 20,
    backgroundColor: Colors.light.card,
    padding: 6,
    borderRadius: 20,
  } as ViewStyle,

  summaryBox: {
    marginBottom: 24,
  } as ViewStyle,

  smallGrayText: {
    ...Fonts.regular,
    fontSize: 14,
    color: Colors.light.tint,
  } as TextStyle,

  boldBlackText: {
    ...Fonts.bold,
    fontSize: 16,
    color: Colors.light.text,
  } as TextStyle,

  menuWrapper: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  } as ViewStyle,

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  } as ViewStyle,

  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,

  menuTitle: {
    ...Fonts.bold,
    fontSize: 16,
    color: Colors.light.text,
  } as TextStyle,

  menuSubtitle: {
    ...Fonts.regular,
    fontSize: 12,
    color: Colors.light.tint,
  } as TextStyle,
  scoreSection: {
    alignItems: "center",
    marginTop: 100,
  },
  grayLabel: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 8,
  },
  bigScore: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#000",
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
    color: "#000",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
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
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 15,
  },

  cancelButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginRight: 8,
  },
  closeButton: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  itemCard: {
    padding: 16,
    backgroundColor: "#f3f3f3",
    borderRadius: 12,
    marginBottom: 12,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemSub: {
    color: "#666",
    marginTop: 4,
  },
  infoBox: {
    marginTop: 60,
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 12,
    gap: 12,
  },
  infoTitle: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  homeButton: {
    backgroundColor: "#000000",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  logoutButtonText: {
    color: "#fff",
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
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 12,
    gap: 12,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12,
  },
} as const;
