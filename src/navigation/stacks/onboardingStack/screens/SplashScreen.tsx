import { useAppNavigation } from "@hooks/app/useAppNavigation";

import { useEffect } from "react";

interface ISplashScreenProps {}
const SplashScreen = ({}: ISplashScreenProps) => {
  const { navigate } = useAppNavigation();
  useEffect(() => {
    // handle logic when opening the app
    // navigate('IntroScreen');
    // navigate('KycStack', {screen: 'KycScreen'});
  }, [navigate]);

  return null;
};
export default SplashScreen;
