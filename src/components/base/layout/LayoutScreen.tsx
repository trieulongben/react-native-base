import React from 'react';

import {StyleSheet, View} from 'react-native';

import COLORS from '@assets/color';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ILayoutScreenProps {
  children: React.ReactNode;
  isSafeArea?: boolean;
  isShowHeader?: boolean;
  safeAreaColor?: keyof typeof COLORS;
  paddingHorizontal?: number;
}
const LayoutScreen = ({
  children,
  isSafeArea = true,
  safeAreaColor,
  paddingHorizontal,
}: ILayoutScreenProps) => {
  const containerStyle = StyleSheet.flatten([
    styles.container,
    {paddingHorizontal},
  ]);

  return (
    <View style={containerStyle}>
      {isSafeArea && (
        <SafeAreaView
          edges={['top']}
          style={{
            backgroundColor: safeAreaColor ? COLORS[safeAreaColor] : undefined,
          }}
        />
      )}

      {children}
    </View>
  );
};
export default LayoutScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
});
