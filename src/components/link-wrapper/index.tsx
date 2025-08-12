import { ReactNode } from "react";
import {
  /* GestureResponderEvent,  */ Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useLinkProps } from "@react-navigation/native";

type LinkButtonProps = {
  screen?: string;
  params?: object;
  action?: any;
  href?: string;
  style?: StyleProp<ViewStyle>;
  touchableOpacity?: boolean;
  // onPress?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
  children?: ReactNode;
} & PressableProps;

/* Actions would be normally ignored or malfunctioned with web use */
export default function LinkWrapper({
  screen = "",
  params = {},
  action,
  href,
  style,
  /* touchableOpacity: true, if opacity changes when touched are wanted */
  touchableOpacity = false,
  // onPress,
  children,
  ...rest
}: LinkButtonProps) {
  const props = useLinkProps({ screen, params, action, href });
  // /* MergedOnPress would overwrite onPress of props */
  // const MergedOnPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => {
  //   if(onPress) onPress(e);
  //   props.onPress(e);
  // }
  return (
    <Pressable
      {...props}
      // onPress={MergedOnPress}
      style={({ pressed }) => [
        ...(Array.isArray(style) ? style : [style]),
        { opacity: touchableOpacity && pressed ? 0.5 : 1 },
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
