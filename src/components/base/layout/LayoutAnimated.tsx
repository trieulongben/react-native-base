import Animated, {
  BaseAnimationBuilder,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

import React, {useMemo} from 'react';

import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

interface ILayoutAnimatedProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  enteringAnimation?: BaseAnimationBuilder;
  exitingAnimation?: BaseAnimationBuilder;
}
const LayoutAnimated = ({
  style,
  children,
  enteringAnimation,
  exitingAnimation,
}: ILayoutAnimatedProps) => {
  const containerStyle = useMemo(
    () => StyleSheet.compose(styles.container, style),
    [style],
  );

  return (
    <Animated.View
      entering={enteringAnimation || FadeIn}
      exiting={exitingAnimation ? FadeOut : undefined}
      style={containerStyle}>
      {children}
    </Animated.View>
  );
};
export default LayoutAnimated;

const styles = StyleSheet.create({container: {overflow: 'hidden'}});
