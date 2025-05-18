import React, {useMemo} from 'react';

import COLORS from '@assets/color';
import {StyleSheet, TouchableOpacity} from 'react-native';

import SvgIcon from '../svg_icon/SvgIcon';
import {TIconName} from '../svg_icon/types';

import {iconButtonSize, iconButtonStyleSize} from './constants';
import {TIconButtonSize} from './types';

interface IIconButtonProps {
  iconColor?: keyof typeof COLORS;
  borderColor?: keyof typeof COLORS;
  backgroundColor?: keyof typeof COLORS;
  name: TIconName;
  size: TIconButtonSize;
  onPress?: () => void;
}
const IconButton = ({
  iconColor = 'primary',
  backgroundColor,
  borderColor = 'outline',
  name,
  size = '36',
  onPress,
}: IIconButtonProps) => {
  const buttonContainerStyle = useMemo(() => {
    return StyleSheet.compose(iconButtonStyleSize[size], {
      backgroundColor: backgroundColor ? COLORS[backgroundColor] : undefined,
      borderColor: COLORS[borderColor],
      borderWidth: 1,
    });
  }, [backgroundColor, borderColor, size]);

  return (
    <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
      <SvgIcon name={name} size={iconButtonSize[size]} fill={iconColor} />
    </TouchableOpacity>
  );
};
export default IconButton;
