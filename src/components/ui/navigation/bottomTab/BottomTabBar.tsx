import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import React from 'react';

import {StyleSheet, View} from 'react-native';

import {sizeScale} from '@utils/dimension';

import BottomTabBarItem from './BottomTabBarItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '@assets/color';

const BottomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        return (
          <BottomTabBarItem
            key={label}
            label={label}
            isFocused={isFocused}
            navigation={navigation}
            routeName={route.name}
          />
        );
      })}
      <SafeAreaView edges={['bottom']} />
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.surfaceVariant,
    height: sizeScale(80),
    paddingTop: sizeScale(12),
    paddingHorizontal: sizeScale(12),
    paddingBottom: sizeScale(18),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
