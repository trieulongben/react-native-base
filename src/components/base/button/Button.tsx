import React, {useMemo} from 'react';

import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import {TSize} from './types';
import COLORS from '@assets/color';
import {TIconName} from '../svg_icon/types';
import SvgIcon from '../svg_icon/SvgIcon';
import {buttonStyleSize, iconsSize, labelStyleSize} from './constants';
import {triggerHaptics} from '@utils/haptics';

export interface IBaseButton {
  //attribute
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;

  //button

  width?: number;
  size?: TSize;
  containerStyle?: StyleProp<ViewStyle>;
  buttonColor?: keyof typeof COLORS;
  labelColor?: keyof typeof COLORS;
  borderColor?: keyof typeof COLORS;
  center?: boolean;
  borderRadius?: number;

  //label
  label: string;

  //icon
  leftIconName?: TIconName;
  rightIconName?: TIconName;
}

const BaseButton = ({
  onPress,
  disabled,
  isLoading = false,

  width,
  containerStyle,
  buttonColor,
  labelColor = 'onPrimary',
  borderColor,
  center = false,
  borderRadius = 12,

  label = 'button',
  size = '48',

  leftIconName,
  rightIconName,
}: IBaseButton) => {
  const buttonStyle = useMemo(() => {
    return StyleSheet.compose(styles.buttonContainer, {
      ...buttonStyleSize[size],
      backgroundColor: buttonColor ? COLORS[buttonColor] : 'transparent',
      borderWidth: borderColor ? 1 : 0,
      borderColor: borderColor ? COLORS[borderColor] : 'transparent',
      width: width,
      opacity: disabled ? 0.5 : 1,
      alignSelf: center ? 'center' : undefined,
      borderRadius,
    });
  }, [borderColor, buttonColor, center, disabled, size, width, borderRadius]);
  const labelStyle = useMemo(() => {
    return StyleSheet.compose(labelStyleSize[size], {
      color: COLORS[labelColor],
      textAlign: center ? 'center' : undefined,
    });
  }, [labelColor, size, center]);

  if (isLoading) {
    return (
      <View style={containerStyle}>
        <View style={buttonStyle}>
          <ActivityIndicator color={labelColor} size={iconsSize[size]} />
        </View>
      </View>
    );
  }

  const _handleOnPress = () => {
    if (onPress) {
      triggerHaptics();
      onPress();
    }
  };

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={buttonStyle}
        disabled={disabled}
        onPress={_handleOnPress}>
        {leftIconName && (
          <SvgIcon
            name={leftIconName}
            size={iconsSize[size]}
            fill={labelColor}
          />
        )}
        <Text style={labelStyle}>{label}</Text>
        {rightIconName && (
          <SvgIcon
            name={rightIconName}
            size={iconsSize[size]}
            fill={labelColor}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
