import React, {useCallback} from 'react';

import {Pressable, StyleSheet} from 'react-native';

import {sizeScale} from '@utils/dimension';

import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {triggerHaptics} from '@utils/haptics';

export interface ICheckboxProps {
  onPress: (value: boolean) => void;
  value: boolean;
  children?: React.ReactNode;
}
const CheckBox = ({value, onPress, children}: ICheckboxProps) => {
  const _handleOnPress = useCallback(() => {
    if (onPress) {
      triggerHaptics();
      onPress(!value);
    }
  }, [onPress, value]);

  return (
    <Pressable hitSlop={20} onPress={_handleOnPress} style={styles.container}>
      <SvgIcon
        name={value ? 'checkboxTrue' : 'checkboxFalse'}
        fill={value ? 'primary' : 'onPrimary'}
        size={24}
      />
      {children}
    </Pressable>
  );
};
export default CheckBox;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: sizeScale(8),
    borderColor: 'white',
    alignItems: 'center',
  },
});
