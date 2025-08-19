import { RootStackParamList } from "@/src/config/deep-linking";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";

const NavigationAPI = {
  /* A useEffect tool for all platforms */
  /* eslint-disable react-hooks/exhaustive-deps */
  useCompatibleEffect: (effect: () => void | (() => void), deps: any[] = []) =>
    useEffect(effect, deps),
  /* eslint-enable react-hooks/exhaustive-deps */
  useNavigationWithTS: () => useNavigation<NativeStackNavigationProp<RootStackParamList>>(),
};

export default NavigationAPI;
