import COLORS from '@assets/color';
import {LayoutAnimated, SvgIcon} from '@components/base';
import {sizeScale} from '@utils/dimension';
import {triggerHaptics} from '@utils/haptics';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import OnboardingButton, {IOnboardingButtonRef} from './OnboardingButton';

export enum EOnboardingEducationFooterButtonState {
  PRIMARY_ONLY = 'PRIMARY_ONLY',
  PRIMARY_AND_SECONDARY = 'PRIMARY_AND_SECONDARY',
  SECONDARY_ONLY = 'SECONDARY_ONLY',
}

export interface IOnboardingEducationFooterRef {
  triggerWaitingOpacity: () => void;
  changeState: (
    state: keyof typeof EOnboardingEducationFooterButtonState,
  ) => void;
}

interface IOnboardingEducationFooterProps {
  onPress: () => void;
  onSecondaryPress?: () => void;
  initialState?: keyof typeof EOnboardingEducationFooterButtonState;
}

const OnboardingEducationFooter = forwardRef<
  IOnboardingEducationFooterRef,
  IOnboardingEducationFooterProps
>(
  (
    {
      onPress = () => {},
      onSecondaryPress = () => {},
      initialState = 'PRIMARY_ONLY',
    },
    ref,
  ) => {
    const DELAY_TIME = 2000; //2 seconds

    const [uiState, setUiState] =
      useState<EOnboardingEducationFooterButtonState>(
        EOnboardingEducationFooterButtonState[initialState],
      );

    const OnboardingButtonRef = useRef<IOnboardingButtonRef>(null);

    const showBothButtons = uiState === 'PRIMARY_AND_SECONDARY';
    const showBackButton =
      (uiState !== 'PRIMARY_ONLY' && uiState === 'SECONDARY_ONLY') ||
      showBothButtons;

    const showContinueButton =
      (uiState !== 'SECONDARY_ONLY' && uiState === 'PRIMARY_ONLY') ||
      showBothButtons;

    const _triggerWaitingOpacity = () => {
      OnboardingButtonRef.current?.triggerWaitingOpacity();
    };

    useImperativeHandle(ref, () => ({
      triggerWaitingOpacity: _triggerWaitingOpacity,
      changeState: _handleChangeState,
    }));

    const _handleChangeState = (
      state: keyof typeof EOnboardingEducationFooterButtonState,
    ) => {
      setUiState(EOnboardingEducationFooterButtonState[state]);
    };

    const _handleOnPress = () => {
      onPress?.();
    };

    const _handleOnSecondaryPress = () => {
      onSecondaryPress?.();
    };

    return (
      <LayoutAnimated style={styles.container}>
        {showBackButton && <BackButton onPress={_handleOnSecondaryPress} />}
        <View style={styles.buttonContainer}>
          {showContinueButton && (
            <OnboardingButton
              ref={OnboardingButtonRef}
              duration={DELAY_TIME}
              label="Continue"
              onPress={_handleOnPress}
            />
          )}
        </View>
      </LayoutAnimated>
    );
  },
);

interface IBackButton {
  onPress: () => void;
}

const BackButton = ({onPress}: IBackButton) => {
  const _handleOnPress = () => {
    triggerHaptics();
    onPress?.();
  };
  return (
    <TouchableOpacity style={styles.backButton} onPress={_handleOnPress}>
      <SvgIcon name="chevronLeftIcon" size={30} fill={'surface'} />
    </TouchableOpacity>
  );
};

export default OnboardingEducationFooter;

const styles = StyleSheet.create({
  container: {
    padding: sizeScale(16),
    paddingBottom: sizeScale(32),
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(16),
  },
  backButton: {
    borderRadius: 1000,
    padding: sizeScale(12),
    backgroundColor: COLORS.backButton,
  },
  buttonContainer: {
    flex: 1,
  },
});
