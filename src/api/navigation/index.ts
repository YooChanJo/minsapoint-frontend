import { RootStackParamList } from "@/src/config/deep-linking";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const NavigationAPI: { useCompatibleEffect: Function; useNavigationWithTS: Function } = {
  /* A useEffect tool for all platforms */
  /* eslint-disable react-hooks/exhaustive-deps */
  useCompatibleEffect: (effect: () => void | (() => void), deps: any[] = []) =>
    useFocusEffect(useCallback(effect, deps)),
  /* eslint-enable react-hooks/exhaustive-deps */
  useNavigationWithTS: () => useNavigation<RootStackParamList>(),
};

export default NavigationAPI;
