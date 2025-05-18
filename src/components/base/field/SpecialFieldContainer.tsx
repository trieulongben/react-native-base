import React from 'react';

import {StyleSheet, View} from 'react-native';

import {sizeScale} from '@utils/dimension';

import {Layout} from '../layout/index';
import Text from '../text/Text';

interface ISpecialFieldContainerProps {
  children?: React.ReactNode;
  errorMessage?: string;
}
const SpecialFieldContainer = ({
  children,
  errorMessage,
}: ISpecialFieldContainerProps) => {
  return (
    <Layout.Animated style={styles.container}>
      <View style={styles.childrenWrapperStyle}>{children}</View>
      {errorMessage && (
        <Text size="12" weight="light" color="error">
          {errorMessage}
        </Text>
      )}
    </Layout.Animated>
  );
};
export default SpecialFieldContainer;
const styles = StyleSheet.create({
  container: {gap: sizeScale(8)},
  childrenWrapperStyle: {
    height: sizeScale(80),
    justifyContent: 'center',
  },
});
