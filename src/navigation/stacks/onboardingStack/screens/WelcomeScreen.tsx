import LayoutScreen from '@components/base/layout/LayoutScreen';
import React from 'react';

import {StyleSheet, View} from 'react-native';

import Text from '@components/base/text/Text';
import COLORS from '@assets/color';

const WelcomeScreen = () => {
  return (
    <LayoutScreen>
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    </LayoutScreen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
