import COLORS from '@assets/color';
import {Button} from '@components/base/button';
import ProgressBar from '@components/ui/progress_bar/ProgressBar';
import {sizeScale} from '@utils/dimension';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EExerciseDetailUIState} from '../ExerciseDetailScreen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
interface IExerciseDetailFooterProps {
  currentRep: number;
  totalRep: number;
  currentSet: number;
  handleNextRep: () => void;
  handleNextExercise: () => void;
  isTimeBasedExercise: boolean;
  state: EExerciseDetailUIState;
}

// Countdown Timer using Reanimated

const CountdownTimer = ({initialTime = 10, onComplete = () => {}}) => {
  const [seconds, setSeconds] = useState(initialTime);
  const scaleAni = useSharedValue(1);

  useEffect(() => {
    scaleAni.value = withRepeat(withTiming(1.1, {duration: 1000}), -1, true);
  }, [scaleAni]);

  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleAni.value}],
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, onComplete]);

  return (
    <View style={styles.countdownContainer}>
      <Animated.View style={[styles.timeoutContainer, scaleStyle]}>
        <Text style={styles.timeoutText}>{seconds}</Text>
      </Animated.View>
    </View>
  );
};

const ExerciseDetailFooter = ({
  currentRep,
  totalRep,
  currentSet,
  handleNextRep,
  handleNextExercise,
  state,
  isTimeBasedExercise,
}: IExerciseDetailFooterProps) => {
  const buttonText = () => {
    if (state === EExerciseDetailUIState.START_SET) {
      return 'Start';
    }

    if (state === EExerciseDetailUIState.IN_PROGRESS) {
      return 'Cancel';
    }

    if (state === EExerciseDetailUIState.SET_COMPLETED) {
      return 'Next set';
    }

    return 'Next exercise';
  };

  const _handleStartCommand = () => {};

  return (
    <View style={[styles.container, {paddingHorizontal: sizeScale(16)}]}>
      <Button.Fill
        onPress={_handleStartCommand}
        label={buttonText()}
        borderRadius={1000}
        size="40"
      />
    </View>
  );
};

export default ExerciseDetailFooter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizeScale(16),
  },
  timeBasedExerciseText: {
    fontSize: sizeScale(14),
    fontWeight: '600',
    letterSpacing: 0.5,
    color: COLORS.onBackground,
    fontFamily: 'Inter-SemiBold',
  },

  workoutCompleteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(8),
    paddingVertical: sizeScale(28),
    backgroundColor: COLORS.success,
    justifyContent: 'center',
  },
  workoutCompleteText: {
    fontSize: sizeScale(16),
    fontWeight: 'medium',
    letterSpacing: 0.5,
    color: COLORS.onSuccess,
    fontFamily: 'Inter',
  },
  timeoutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: sizeScale(1000),
    width: sizeScale(40),
    height: sizeScale(40),
    borderWidth: 2,
    borderColor: COLORS.background,
    gap: sizeScale(8),
  },
  countdownText: {
    fontSize: sizeScale(12),
    fontWeight: 'regular',
    letterSpacing: 0.5,
    color: COLORS.textDescription,
  },
  countdownContainer: {
    padding: sizeScale(5),
    borderRadius: sizeScale(1000),
    backgroundColor: COLORS.primaryLight,
  },
  timeoutText: {
    fontSize: sizeScale(14),
    fontWeight: '600',
    fontFamily: 'Inter',
    color: COLORS.onPrimary,
    textAlign: 'center',
    width: sizeScale(20),
    height: sizeScale(20),
  },
  repNumber: {
    fontWeight: 'bold',
  },
  repInfoText: {
    fontSize: sizeScale(16),
    fontWeight: 'regular',
    letterSpacing: 0.5,
    lineHeight: sizeScale(24),
  },
  repInfoLeft: {
    fontSize: sizeScale(12),
    fontWeight: 'regular',
    letterSpacing: 0.5,
    color: COLORS.textDescription,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(16.5),
  },
  repInfoContainer: {
    flexDirection: 'column',
  },
  countdownLeftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(4),
  },
  buttonWrapper: {},
  progressBarContainer: {
    height: sizeScale(10),
  },
});
