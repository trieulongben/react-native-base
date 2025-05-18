import React, {useMemo} from 'react';

import {StyleSheet, View} from 'react-native';

import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';

import Text from '@components/base/text/Text';

interface IFieldContainerProps {
  children?: React.ReactNode;
  label?: string;
  errorMessage?: string;
  isFocus?: boolean;
  isMultiline?: boolean;
}
const FieldContainer = ({
  children,
  label,
  errorMessage,
  isFocus,
  isMultiline = false,
}: IFieldContainerProps) => {
  const childrenWrapperStyle = useMemo(() => {
    const childrenWrapper = isMultiline
      ? StyleSheet.compose(styles.childrenWrapper, {
          height: sizeScale(182),
          paddingVertical: sizeScale(12),
          alignItems: 'flex-start',
        })
      : styles.childrenWrapper;

    if (errorMessage) {
      return StyleSheet.compose(childrenWrapper, styles.childrenWrapperError);
    }
    if (isFocus) {
      return StyleSheet.compose(childrenWrapper, styles.childrenWrapperFocus);
    }
    return childrenWrapper;
  }, [errorMessage, isMultiline, isFocus]);

  return (
    <View style={styles.container}>
      {label && (
        <Text size="14" weight="semiBold" color="onSurface">
          {label}
        </Text>
      )}
      <View style={childrenWrapperStyle}>{children}</View>

      {errorMessage && (
        <Text size="12" weight="light" color="error">
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
export default FieldContainer;
const styles = StyleSheet.create({
  container: {gap: sizeScale(8)},
  childrenWrapper: {
    borderRadius: sizeScale(12),
    borderWidth: sizeScale(1),
    flexDirection: 'row',
    borderColor: COLORS.outline,
    gap: sizeScale(8),
    paddingHorizontal: sizeScale(12),
    height: sizeScale(44),
    alignItems: 'center',
  },
  childrenWrapperError: {
    borderColor: COLORS.error,
    borderWidth: sizeScale(2),
  },
  childrenWrapperFocus: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
});
