import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import React, {useMemo} from 'react';

import {ViewStyle} from 'react-native';

import {sizeScale} from '@utils/dimension';

interface ILayoutBodyScrollViewKeyboardAwareProps {
  paddingHorizontal?: number;
  children?: React.ReactNode;
}
const LayoutBodyScrollViewKeyboardAware = ({
  paddingHorizontal,
  children,
}: ILayoutBodyScrollViewKeyboardAwareProps) => {
  const containerStyle: ViewStyle = useMemo(
    () => ({
      flex: 1,
      paddingHorizontal: paddingHorizontal
        ? sizeScale(paddingHorizontal)
        : undefined,
    }),
    [paddingHorizontal],
  );
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={containerStyle}
      enableAutomaticScroll
      enableOnAndroid>
      {children}
    </KeyboardAwareScrollView>
  );
};
export default LayoutBodyScrollViewKeyboardAware;
