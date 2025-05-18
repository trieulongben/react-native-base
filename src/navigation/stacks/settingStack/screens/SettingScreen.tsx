import COLORS from '@assets/color';
import LayoutScreen from '@components/base/layout/LayoutScreen';
import {sizeScale} from '@utils/dimension';
import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import {AppHeader, ProBadge} from './components';
import SettingMenu from './components/SettingMenu';

const SettingScreen = () => {
  return (
    <LayoutScreen safeAreaColor="surface">
      <View style={styles.root}>
        <AppHeader title="Settings" />
        <View style={styles.spacer} />
        <ScrollView contentContainerStyle={styles.container}>
          <ProBadge />
          <View style={styles.spacer2} />
          <SettingMenu />
        </ScrollView>
      </View>
    </LayoutScreen>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: sizeScale(16),
  },
  root: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  spacer: {
    height: sizeScale(35),
  },
  spacer2: {
    height: sizeScale(18.9),
  },
});
