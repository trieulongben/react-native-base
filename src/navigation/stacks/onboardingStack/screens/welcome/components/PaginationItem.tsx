import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

import React, { useMemo } from "react";

import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
interface IPaginationDot {
  data: Array<object> | string[];
  scrollOffset: SharedValue<number>;
  containerStyle?: StyleProp<ViewStyle>;
  activeDotColor?: string;
  deActiveDotColor?: string;
  snapToInterval?: number;
  dotSize?: number;
}

const PaginationDot = ({
  data = [],
  scrollOffset,
  containerStyle,
  activeDotColor,
  deActiveDotColor,
  snapToInterval = SCREEN_WIDTH,
  dotSize = 10,
}: IPaginationDot) => {
  const containerStyles = useMemo(() => {
    return StyleSheet.compose(styles.container, containerStyle);
  }, [containerStyle]);
  return (
    <View style={containerStyles}>
      {data.map((_, index) => (
        <PaginationDotItem
          index={index}
          scrollOffset={scrollOffset}
          key={index}
          activeDotColor={activeDotColor}
          deActiveDotColor={deActiveDotColor}
          snapToInterval={snapToInterval}
          dotSize={dotSize}
        />
      ))}
    </View>
  );
};
export default PaginationDot;
const PaginationDotItem = ({
  index,
  scrollOffset,
  deActiveDotColor = "#D9D9D9",
  activeDotColor = "#000000",
  snapToInterval = SCREEN_WIDTH,
  dotSize = 10,
}: {
  index: number;
  scrollOffset: SharedValue<number>;
  deActiveDotColor?: string;
  activeDotColor?: string;
  snapToInterval?: number;
  dotSize?: number;
}) => {
  const inputRange = useMemo(
    () => [
      (index - 4) * snapToInterval,
      index * snapToInterval,
      (index + 4) * snapToInterval,
    ],
    [index, snapToInterval]
  );

  const inputRangeBackground = useMemo(
    () => [
      (index - 1) * snapToInterval,
      index * snapToInterval,
      (index + 1) * snapToInterval,
    ],
    [index, snapToInterval]
  );

  const widthStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollOffset.value,
      inputRangeBackground,
      [deActiveDotColor, activeDotColor, deActiveDotColor]
    );

    const opacity = interpolate(
      scrollOffset.value,
      inputRange,
      [0.25, 1, 0.25]
    );

    return {
      opacity,
      backgroundColor,
      height: dotSize,
      width: dotSize,
    };
  }, []);

  return <Animated.View style={[styles.dot, widthStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "black",
  },
});
