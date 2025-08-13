import {
  Colors,
  ColorStyleType,
  CommonStyles,
  CommonStylesType,
  Fonts,
  FontStyleSetType,
} from "@/src/constants/ui-styles";
import { createContext, ReactNode, useContext } from "react";
import { ColorSchemeName } from "react-native";

export interface UiStylesContextType {
  colors: ColorStyleType;
  fonts: FontStyleSetType;
  commonStyles: CommonStylesType;
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

interface UiStylesProviderProps {
  colorScheme: ColorSchemeName;
  children: ReactNode;
}

export function UiStylesProvider({
  colorScheme,
  children,
}: UiStylesProviderProps) {
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
