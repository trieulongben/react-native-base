import {useAppNavigation} from '@hooks/app/useAppNavigation';

import React, {useCallback} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';

import SvgIcon from '@components/base/svg_icon/SvgIcon';

import {sizeScale} from '@utils/dimension';

const HeaderLeft = () => {
  const {goBack} = useAppNavigation();
  const _handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);
  return (
    <TouchableOpacity
      onPress={_handleGoBack}
      hitSlop={12}
      style={styles.button}>
      <SvgIcon name="arrowLeft" size={20} fill="ELEMENT_ACCENT" />
    </TouchableOpacity>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  button: {
    width: sizeScale(28),
    height: sizeScale(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
