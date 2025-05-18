import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import React, {memo, useCallback, useEffect} from 'react';

import {Pressable, StyleSheet, Text} from 'react-native';

import {LayoutAnimated, Show, SvgIcon} from '@components/base';

import {Constants} from '@constants/index';
import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';

interface IBottomTabBarNotifyItemProps {
  label: string;
  isFocused: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  routeName: string;
}
const BottomTabBarNotifyItem = ({
  isFocused,
  label,
  navigation,
  routeName,
}: IBottomTabBarNotifyItemProps) => {
  const {BOTTOM_TAB_BAR_HASH_MAP} = Constants.app;
  const progress = useSharedValue(0);
  const onPress = useCallback(() => {
    navigation.navigate(routeName);
  }, [navigation, routeName]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [COLORS.primary, COLORS.primary],
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
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}>
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        <LayoutAnimated>
          <Show>
            <Show.When isTrue={isFocused}>
              <SvgIcon
                name={BOTTOM_TAB_BAR_HASH_MAP[label].iconActive}
                size={20}
              />
            </Show.When>
            <Show.Else>
              <SvgIcon
                name={BOTTOM_TAB_BAR_HASH_MAP[label].iconUnActive}
                size={20}
              />
            </Show.Else>
          </Show>
        </LayoutAnimated>
        {isFocused && (
          <LayoutAnimated>
            <Text>{BOTTOM_TAB_BAR_HASH_MAP[label].name}</Text>
          </LayoutAnimated>
        )}
      </Animated.View>
    </Pressable>
  );
};
export default memo(BottomTabBarNotifyItem);
const styles = StyleSheet.create({
  itemContainer: {
    width: sizeScale(84),
    height: sizeScale(36),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: sizeScale(4),
    borderRadius: sizeScale(36),
  },
});
