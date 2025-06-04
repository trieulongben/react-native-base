import COLORS from "@assets/color";
import LayoutScreen from "@components/base/layout/LayoutScreen";
import { sizeScale } from "@utils/dimension";
import React from "react";

import { StyleSheet } from "react-native";

const SettingScreen = () => {
  return <LayoutScreen safeAreaColor="surface"></LayoutScreen>;
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: sizeScale(16),
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  spacer: {
    height: sizeScale(35),
  },
  spacer2: {
    height: sizeScale(18.9),
  },
});
