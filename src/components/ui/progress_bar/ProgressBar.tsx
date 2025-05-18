import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import React, {useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface IProgressBarProps {
  progress: number;
  height?: number;
  borderRadius?: number;
  style?: ViewProps['style'];
  progressColor?: string;
  backgroundColor?: string;
  roundedInsideOnly?: boolean;
}
const ProgressBar = ({
  progress,
  height = sizeScale(4),
  borderRadius = sizeScale(7),
  style,
  progressColor = COLORS.primary,
  backgroundColor = COLORS.background,
  roundedInsideOnly = false,
}: IProgressBarProps) => {
  const aniStyle = useAnimatedStyle(() => {
    return {
      width: `${progress * 100}%`,
    };
  });

  const barStyle = useMemo(() => {
    return {
      height,
      borderRadius,
      backgroundColor,
    };
  }, [height, borderRadius, backgroundColor]);

  return (
    <View style={[styles.container, barStyle, style]}>
      <Animated.View
        style={[
          styles.progress,
          barStyle,
          aniStyle,
          {
            backgroundColor: progressColor,
            borderTopLeftRadius: roundedInsideOnly ? 0 : borderRadius,
            borderBottomLeftRadius: roundedInsideOnly ? 0 : borderRadius,
          },
        ]}
      />
    </View>
  );
};
export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizeScale(4),
    backgroundColor: COLORS.background,
  },
  progress: {
    height: sizeScale(4),
    backgroundColor: COLORS.primary,
  },
});
