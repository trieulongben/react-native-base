import LayoutScreen from "@components/base/layout/LayoutScreen";
import React from "react";

import { StyleSheet, View } from "react-native";

import WelcomeScreenComps from "./layout";
import COLORS from "@assets/color";

const WelcomeScreen = () => {
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <WelcomeScreenComps.Body />
      </View>
    </LayoutScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
