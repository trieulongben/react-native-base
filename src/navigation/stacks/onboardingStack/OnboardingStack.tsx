import React from "react";

import AppStack from "@components/base/navigation/AppStack";
import { INTRO_STACK } from "@constants/navigation/stack/introStack";

const OnboardingStack = () => {
  return (
    <AppStack
      initialRouteName="OnboardingEducationScreen"
      stackData={INTRO_STACK}
    />
  );
};
export default OnboardingStack;
