import COLORS from '@assets/color';
import FillButton from '@components/base/button/FillButton';
import {sizeScale} from '@utils/dimension';
import {triggerHaptics} from '@utils/haptics';
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface IActionButtonProps {
  title: string;
  isDoneToday?: boolean;
  onPress?: () => void;
}

export const ActionButton = ({
  title,
  isDoneToday,
  onPress,
}: IActionButtonProps) => {
  const _handleOnPress = () => {
    triggerHaptics();
    onPress?.();
  };

  const buttonColor = isDoneToday ? COLORS.success : COLORS.primary;

  const buttonStyle = StyleSheet.compose(styles.actionButton, {
    backgroundColor: buttonColor,
  });

  return (
    <TouchableOpacity style={buttonStyle} onPress={_handleOnPress}>
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 1000,
    paddingHorizontal: sizeScale(36),
    paddingVertical: sizeScale(14),
  },
  actionButtonText: {
    color: COLORS.onPrimary,
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
});
