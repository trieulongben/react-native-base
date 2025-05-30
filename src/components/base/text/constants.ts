import {StyleSheet, TextStyle} from 'react-native';

import {FONTS} from '@configs/fonts';
import {sizeScale} from '@utils/dimension';

import {TTextSize, TTextWeight} from './type';

export const FONTS_WEIGHT_HASH_MAP: {[n in TTextWeight]: TextStyle} =
  StyleSheet.create({
    light: {fontFamily: FONTS['BeVietnamPro-Light']},
    lightItalic: {fontFamily: FONTS['BeVietnamPro-LightItalic']},
    medium: {fontFamily: FONTS['BeVietnamPro-Medium']},
    mediumItalic: {fontFamily: FONTS['BeVietnamPro-MediumItalic']},
    semiBold: {fontFamily: FONTS['BeVietnamPro-SemiBold']},
    semiBoldItalic: {fontFamily: FONTS['BeVietnamPro-SemiBoldItalic']},
  });

export const FONTS_SIZE_HASH_MAP: {[n in TTextSize]: TextStyle} =
  StyleSheet.create({
    '11': {
      fontSize: sizeScale(11),
      lineHeight: sizeScale(14),
    },
    '12': {
      fontSize: sizeScale(12),
      lineHeight: sizeScale(18),
    },
    '14': {
      fontSize: sizeScale(14),
      lineHeight: sizeScale(20),
    },
    '16': {
      fontSize: sizeScale(16),
      lineHeight: sizeScale(24),
    },

    '18': {
      fontSize: sizeScale(18),
      lineHeight: sizeScale(28),
    },
    '20': {
      fontSize: sizeScale(20),
      lineHeight: sizeScale(30),
    },
    '24': {
      fontSize: sizeScale(24),
      lineHeight: sizeScale(32),
    },
    '30': {
      fontSize: sizeScale(30),
      lineHeight: sizeScale(38),
    },
    '36': {
      fontSize: sizeScale(36),
      lineHeight: sizeScale(44),
    },
    '48': {
      fontSize: sizeScale(48),
      lineHeight: sizeScale(60),
    },
    '60': {
      fontSize: sizeScale(60),
      lineHeight: sizeScale(72),
    },
  });
