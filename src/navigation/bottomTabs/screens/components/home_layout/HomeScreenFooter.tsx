import COLORS from '@assets/color';
import BottomSheet, {
  TBottomSheetRef,
} from '@components/base/bottomsheet/BottomSheet';
import {EDay} from '@constants/exercise/program';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import programHooks from '@hooks/program/useProgram';
import {sizeScale} from '@utils/dimension';
import {triggerHaptics} from '@utils/haptics';
import React, {useMemo, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EHomeScreenState} from '../../uiState';
import {ActionButton} from '../ActionButton';

interface IHomeScreenFooterProps {
  state: EHomeScreenState;
  currentDayIndex: number;
  resetProgram: () => void;
  handleGoNextDay: () => void;
}

const TextButton = ({title, onPress}: {title: string; onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

interface IButtonProps {
  title: string;
  onPress: () => void;
  isPrimary?: boolean;
}

const Button = ({title, onPress, isPrimary = true}: IButtonProps) => {
  const backgroundColor = isPrimary ? COLORS.primary : COLORS.background;
  const textColor = isPrimary ? COLORS.onPrimary : COLORS.primary;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreenFooter = ({
  state = EHomeScreenState.NEXT_DAY,
  currentDayIndex,
  handleGoNextDay,
  resetProgram,
}: IHomeScreenFooterProps) => {
  const restartBottomSheetRef = useRef<TBottomSheetRef>(null);
  const navigation = useAppNavigation();

  const _handleShowRestartBottomSheet = () => {
    triggerHaptics();
    restartBottomSheetRef.current?.show();
  };

  const isDoneToday = state === EHomeScreenState.NEXT_DAY;
  const {programList} = programHooks.useProgram();

  const helperText = useMemo(() => {
    switch (state) {
      case EHomeScreenState.START:
        return (
          <Text style={styles.footerText}>
            {`Complete all exercises to move on to day ${currentDayIndex + 1}!`}
          </Text>
        );
      case EHomeScreenState.RESUME:
        return (
          <Text style={styles.footerText}>
            {`Complete all exercises to move on to day ${currentDayIndex + 1}!`}
          </Text>
        );
      case EHomeScreenState.NEXT_DAY:
        return <Text style={styles.footerText}>{'Exercises complete!'}</Text>;
      case EHomeScreenState.MAIN_PROGRAM_COMPLETED:
        return (
          <TextButton
            title="Restart your program"
            onPress={_handleShowRestartBottomSheet}
          />
        );
    }
  }, [currentDayIndex, state]);

  const buttonTitle = useMemo(() => {
    switch (state) {
      case EHomeScreenState.START:
        return 'Start';
      case EHomeScreenState.RESUME:
        return 'Resume';
      case EHomeScreenState.NEXT_DAY:
        return 'Next Day';
      default:
        return 'Start';
    }
  }, [state]);

  const _handleRestartProgram = () => {
    resetProgram();
    restartBottomSheetRef.current?.hide();
  };

  const _handleCancelRestartProgram = () => {
    restartBottomSheetRef.current?.hide();
  };

  const _handleStartProgram = () => {
    if (isDoneToday) {
      return;
    }
    //Start first uncompleted exercise of currentDay

    const currentDay = Object.values(EDay)[currentDayIndex - 1];
    const firstUncompletedExercise = programList[currentDay].exercises.find(
      exercise => !exercise.isCompleted,
    );
    if (!firstUncompletedExercise) {
      return;
    }
    navigation.navigate('ExerciseDetailScreen', {
      day: currentDay,
      exerciseId: firstUncompletedExercise?.id,
    });
  };

  return (
    <View style={styles.footer}>
      <ActionButton
        onPress={isDoneToday ? handleGoNextDay : _handleStartProgram}
        title={buttonTitle}
        isDoneToday={isDoneToday}
      />
      <View style={styles.helperTextWrapper}>{helperText}</View>
      <BottomSheet ref={restartBottomSheetRef}>
        <View style={styles.bottomSheetContent}>
          <View>
            <Text style={styles.bottomSheetTitle}>Restart program?</Text>
            <Text style={styles.bottomSheetDescription}>
              Your progress will be lost
            </Text>
          </View>
          <View style={styles.bottomSheetButtonRow}>
            <Button
              title="Cancel"
              onPress={_handleCancelRestartProgram}
              isPrimary={false}
            />
            <Button
              title="Restart"
              onPress={_handleRestartProgram}
              isPrimary={true}
            />
          </View>
        </View>
        <View />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(16),
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: COLORS.disable,
    textAlign: 'center',
  },
  helperTextWrapper: {
    marginTop: sizeScale(26),
  },
  textButton: {
    fontFamily: 'Inter',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary,
    color: COLORS.primary,
    fontWeight: '500',
  },
  bottomSheetTitle: {
    fontSize: 32,
    fontWeight: '700',
    fontFamily: 'Lato',
    color: COLORS.primary,
    textAlign: 'center',
    lineHeight: sizeScale(40),
  },
  bottomSheetDescription: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    lineHeight: sizeScale(42),
    letterSpacing: 0.3,
  },
  bottomSheetContent: {
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(16),
    paddingBottom: sizeScale(24),
    alignItems: 'flex-start',
    gap: sizeScale(16),
  },
  bottomSheetButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: sizeScale(16),
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: COLORS.onPrimary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: sizeScale(16),
    borderRadius: sizeScale(10),
    paddingVertical: sizeScale(20),
    borderWidth: 1,
    borderColor: COLORS.primary,
    flex: 1,
  },
});
