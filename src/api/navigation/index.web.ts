import { useEffect } from "react";

const NavigationAPI: { useCompatibleEffect: Function } = {
  /* A useEffect tool for all platforms */
  /* eslint-disable react-hooks/exhaustive-deps */
  useCompatibleEffect: (effect: () => void | (() => void), deps: any[] = []) =>
    useEffect(effect, deps),
  /* eslint-enable react-hooks/exhaustive-deps */
};

export default NavigationAPI;
