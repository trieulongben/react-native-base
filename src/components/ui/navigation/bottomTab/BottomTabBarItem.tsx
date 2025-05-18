import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import React, {memo, useCallback, useEffect} from 'react';

import {Pressable, StyleSheet} from 'react-native';

import {LayoutAnimated, SvgIcon} from '@components/base';

import {Constants} from '@constants/index';
import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';

interface IBottomTabBarItemProps {
  label: string;
  isFocused: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  routeName: string;
}
const BottomTabBarItem = ({
  isFocused,
  label,
  navigation,
  routeName,
}: IBottomTabBarItemProps) => {
  const {BOTTOM_TAB_BAR_HASH_MAP} = Constants.app;
  const progress = useSharedValue(0);
  const onPress = useCallback(() => {
    navigation.navigate(routeName);
  }, [navigation, routeName]);

  const isHabits = routeName === 'HabitsScreen';

  const disableIconColor = isHabits ? 'surfaceVariant' : 'disable';

  const animatedStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 1],
        [COLORS.disable, COLORS.primary],
      ),
    };
  });
  useEffect(() => {
    progress.value = withTiming(isFocused ? 1 : 0);
  }, [isFocused, progress]);

  return (
    <Pressable
      key={label}
      accessibilityRole="checkbox"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      style={styles.container}>
      <Animated.View style={[styles.itemContainer]}>
        <LayoutAnimated>
          <SvgIcon
            name={
              isFocused
                ? BOTTOM_TAB_BAR_HASH_MAP[label].iconActive
                : BOTTOM_TAB_BAR_HASH_MAP[label].iconUnActive
            }
            size={27}
            fill={isFocused ? 'primary' : disableIconColor}
          />
        </LayoutAnimated>
        <LayoutAnimated>
          <Animated.Text style={[styles.textStyle, animatedStyle]}>
            {BOTTOM_TAB_BAR_HASH_MAP[label].name}
          </Animated.Text>
        </LayoutAnimated>
      </Animated.View>
    </Pressable>
  );
};
export default memo(BottomTabBarItem);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: sizeScale(90),
    height: sizeScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: sizeScale(4),
    borderRadius: sizeScale(36),
  },
  textStyle: {
    fontSize: sizeScale(12),
    fontWeight: '600',
    fontFamily: 'Inter',
  },
});
