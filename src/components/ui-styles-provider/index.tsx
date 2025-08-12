import {
  Colors,
  CommonStyles,
  CommonStylesSetType,
  Fonts,
} from "@/src/constants/ui-styles";
import { createContext, ReactNode, useContext } from "react";
import { ColorSchemeName } from "react-native";

interface FontStyleType {
  fontFamily: string;
  fontSize: number;
}

interface UiStylesContextType {
  colors: {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
    border: string;
    card: string;
    button: string;
    buttonText: string;
    success: string;
    error: string;
    notificationBadge: string;
    notificationText: string;
    menuItemBottomColor: string;
    warning: string;
    inputBackground: string;
    inputText: string;
  };
  fonts: {
    regular: FontStyleType;
    bold: FontStyleType;
    heading: FontStyleType;
  };
  commonStyles: CommonStylesSetType;
}

const UiStylesContext = createContext<UiStylesContextType | undefined>(
  undefined
);

export function useUiStyles() {
  const context = useContext(UiStylesContext);
  if (!context) {
    throw new Error("useAuth must be used within an UiStylesProvider");
  }
  return context;
}

interface UiProviderProps {
  colorScheme: ColorSchemeName;
  children: ReactNode;
}

export function UiStylesProvider({ colorScheme, children }: UiProviderProps) {
  const uiStylesValue: UiStylesContextType | undefined =
    colorScheme === "light" || colorScheme === "dark"
      ? {
          colors: Colors[colorScheme],
          fonts: Fonts,
          commonStyles: CommonStyles[colorScheme],
        }
      : undefined;

  if (!uiStylesValue)
    console.error("Ui Styles Provider error: invalid colorScheme");

  return (
    <UiStylesContext.Provider value={uiStylesValue}>
      {children}
    </UiStylesContext.Provider>
  );
}
