import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import {triggerHaptics} from '@utils/haptics';
import React, {forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface IOnboardingButtonProps {
  label: string;
  onPress: () => void;
  duration: number;
}

export interface IOnboardingButtonRef {
  triggerWaitingOpacity: () => void;
}

const OnboardingButton = forwardRef<
  IOnboardingButtonRef,
  IOnboardingButtonProps
>(({label, onPress, duration = 2000}: IOnboardingButtonProps, ref) => {
  const opacityAni = useSharedValue(1);

  const _handleOnPress = () => {
    if (opacityAni.value !== 1) {
      return;
    }
    triggerHaptics();
    onPress?.();
  };

  useImperativeHandle(ref, () => ({
    triggerWaitingOpacity: _triggerWaitingOpacity,
  }));

  const _triggerWaitingOpacity = () => {
    opacityAni.value = withSequence(
      withTiming(0, {duration: 1}),
      withTiming(1, {duration: duration}),
    );
  };

  const opacityStyle = useAnimatedStyle(
    () => ({
      opacity: opacityAni.value,
    }),
    [opacityAni],
  );

  return (
    <TouchableOpacity onPress={_handleOnPress}>
      <Animated.View style={[styles.container, opacityStyle]}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
});

export default OnboardingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: sizeScale(1000),
    paddingVertical: sizeScale(20),
    alignItems: 'center',
  },
  text: {
    color: COLORS.onPrimary,
    fontSize: sizeScale(20),
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
});
