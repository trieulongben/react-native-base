import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {TIconButtonSize, TSize} from './types';
import {sizeScale} from '@utils/dimension';

export const buttonStyleSize: {[n in TSize]: ViewStyle} = StyleSheet.create({
  '69': {
    borderRadius: sizeScale(16),
    paddingHorizontal: sizeScale(24),
    gap: sizeScale(12),
    height: sizeScale(69),
  },
  '48': {
    borderRadius: sizeScale(12),
    paddingHorizontal: sizeScale(12),
    gap: sizeScale(8),
    height: sizeScale(48),
  },
  '40': {
    borderRadius: sizeScale(12),
    paddingHorizontal: sizeScale(24),
    gap: sizeScale(8),
    height: sizeScale(40),
  },
});
export const labelStyleSize: {[n in TSize]: TextStyle} = StyleSheet.create({
  '69': {
    fontSize: sizeScale(28),
    lineHeight: sizeScale(35),
    fontFamily: 'Inter-Medium',
    // paddingHorizontal: sizeScale(6),
  },
  '48': {
    fontSize: sizeScale(22),
    lineHeight: sizeScale(24),
    fontFamily: 'Inter-Medium',
    letterSpacing: 0.1,
    paddingHorizontal: sizeScale(6),
  },
  '40': {
    fontSize: sizeScale(14),
    lineHeight: sizeScale(20),
    fontFamily: 'Inter-Medium',
    letterSpacing: 0.1,
    fontWeight: 'medium',

    // paddingHorizontal: sizeScale(4),
  },
});

export const iconsSize: {[n in TSize]: number} = {
  '69': 24,
  '48': 20,
  '40': 18,
};

export const iconButtonStyleSize: {[n in TIconButtonSize]: ViewStyle} =
  StyleSheet.create({
    '36': {
      borderRadius: sizeScale(12),
      width: sizeScale(36),
      height: sizeScale(36),
      justifyContent: 'center',
      alignItems: 'center',
    },
    '40': {
      borderRadius: sizeScale(12),
      width: sizeScale(36),
      height: sizeScale(36),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const iconButtonSize: {[n in TIconButtonSize]: number} = {
  '36': 20,
  '40': 24,
};
