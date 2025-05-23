import { NavigationContainer } from "@react-navigation/native";

import React from "react";

import AppStack from "@components/base/navigation/AppStack";

import { ROOT_STACK } from "@constants/navigation/stack/rootStack";

import "../preload/preload";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack initialRouteName="OnboardingStack" stackData={ROOT_STACK} />
    </NavigationContainer>
  );
};
export default AppNavigator;
