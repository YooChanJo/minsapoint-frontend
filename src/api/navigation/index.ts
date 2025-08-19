import { RootStackParamList } from "@/src/config/deep-linking";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";

const NavigationAPI = {
  /* A useEffect tool for all platforms */
  /* eslint-disable react-hooks/exhaustive-deps */
  useCompatibleEffect: (effect: () => void | (() => void), deps: any[] = []) =>
    useFocusEffect(useCallback(effect, deps)),
  /* eslint-enable react-hooks/exhaustive-deps */
  useNavigationWithTS: () => useNavigation<NativeStackNavigationProp<RootStackParamList>>(),
};

export default NavigationAPI;
