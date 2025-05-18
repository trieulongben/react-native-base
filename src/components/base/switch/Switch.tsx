import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import React, {useCallback, useEffect, useState} from 'react';

import {Pressable, StyleSheet} from 'react-native';

import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';
import {
  BORDER_WIDTH,
  CIRCLE,
  PADDING,
  SwitchColorConfig,
  SwitchSizeConfig,
  animatedConfig,
} from './config';
import {TSwitchSize} from './type';
interface SwitchProps {
  handleOnPress: (value: boolean) => void;
  initialState: boolean;
  size: TSwitchSize;
  isDisabled?: boolean;
}

const Switch = ({
  handleOnPress,
  initialState = false,
  size,
  isDisabled,
}: SwitchProps) => {
  const switchTranslate = useSharedValue(0);
  const [isActive, setIsActive] = useState(initialState);

  const inactiveColor = SwitchColorConfig.OFF;
  const activeColor = SwitchColorConfig.ON;

  const sizeConfig = SwitchSizeConfig[size];
  const thumbSize = sizeScale(sizeConfig.trackHeight - PADDING);
  const trackHeight = sizeScale(sizeConfig.trackHeight);
  const trackWidth = sizeScale(sizeConfig.trackWidth);

  const translateX = trackWidth - sizeScale(thumbSize) - 7;

  useEffect(() => {
    if (isActive) {
      switchTranslate.value = withSpring(translateX, animatedConfig);
    } else {
      switchTranslate.value = withSpring(0, animatedConfig);
    }
  }, [isActive, switchTranslate, translateX]);

  const interpolateBackgroundColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      switchTranslate.value,
      [0, translateX],
      [COLORS[inactiveColor.trackColor], COLORS[activeColor.trackColor]],
    );

    const opacity = isDisabled ? 0.5 : 1;

    return {backgroundColor, height: trackHeight, width: trackWidth, opacity};
  });
  const interpolateTransForm = useAnimatedStyle(() => {
    return {
      borderColor: isActive
        ? COLORS[activeColor.thumbColor]
        : COLORS[inactiveColor.thumbColor],
      transform: [
        {
          translateX: switchTranslate.value,
        },
      ],
      width: thumbSize,
      height: thumbSize,
    };
  });

  const memoizedOnSwitchPressCallback = useCallback(() => {
    setIsActive(prev => {
      handleOnPress?.(!prev);
      return !prev;
    });
  }, [handleOnPress]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback} disabled={isDisabled}>
      <Animated.View
        style={[styles.containerStyle, interpolateBackgroundColor]}>
        <Animated.View style={[styles.circleStyle, interpolateTransForm]} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    borderRadius: CIRCLE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: BORDER_WIDTH,
    backgroundColor: COLORS.background,
  },
  containerStyle: {
    width: CIRCLE * 2 + PADDING * 2,
    padding: PADDING,
    borderRadius: CIRCLE,
    justifyContent: 'center',
  },
});

export default Switch;
