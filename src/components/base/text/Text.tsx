import React, {useMemo} from 'react';

import {Text as RNText, ViewStyle} from 'react-native';

import {FONTS_SIZE_HASH_MAP, FONTS_WEIGHT_HASH_MAP} from './constants';
import {TTextProps} from './type';
import COLORS from '@assets/color';

const Text = ({
  children,
  size = '14',
  weight = 'medium',
  color = 'onSurface',
  center,
  onPress,
  style,
  ...props
}: TTextProps) => {
  const textStyle: ViewStyle[] = useMemo(() => {
    return [
      {
        color: COLORS[color],
        textAlign: center ? 'center' : 'auto',
        ...FONTS_SIZE_HASH_MAP[size],
        ...FONTS_WEIGHT_HASH_MAP[weight],
      },
      style || {},
    ];
  }, [center, color, size, style, weight]);
  return (
    <RNText style={textStyle} onPress={onPress} disabled={!onPress} {...props}>
      {children}
    </RNText>
  );
};
export default Text;
