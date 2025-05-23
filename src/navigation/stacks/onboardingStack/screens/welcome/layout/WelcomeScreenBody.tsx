import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import COLORS from "@assets/color";
import Text from "@components/base/text/Text";
import { SCREEN_WIDTH, sizeScale } from "@utils/dimension";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "../components/PaginationItem";
import { Image } from "@components/base/image";

type TAdsData = {
  id: number;
  image: string;
};

const ADS_DATA: TAdsData[] = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300",
  },
];

const WelcomeScreenBody = () => {
  const sliderRef = useRef<FlatList<any>>(null);
  const scrollXAni = useSharedValue(0);
  const index = useSharedValue(0);

  const _renderFeedbackItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image.CDN
          uri={item.image}
          style={{ width: SCREEN_WIDTH, height: 300 }}
        />
      </View>
    );
  };

  const _scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollXAni.value = contentOffset.x;
      index.value = Math.round(contentOffset.x / SCREEN_WIDTH);
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text size="48" color="primary">
          Welcome
        </Text>
      </View>
      <View>
        <Animated.FlatList<(typeof ADS_DATA)[0]>
          data={ADS_DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={_renderFeedbackItem}
          keyExtractor={(item, idx) => idx.toString()}
          onScroll={_scrollHandler}
          scrollEventThrottle={16}
          ref={sliderRef}
          removeClippedSubviews={false}
          contentContainerStyle={{
            paddingVertical: sizeScale(10),
            paddingLeft: sizeScale(18),
          }}
        />
        <View style={styles.scrollBulletIndicator}>
          <PaginationDot
            data={ADS_DATA.map((_, idx) => idx.toString())}
            scrollOffset={scrollXAni}
            containerStyle={styles.dotStyle}
            dotSize={10}
            activeDotColor={COLORS.primary}
            deActiveDotColor={"#D9D9D9"}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreenBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollBulletIndicator: {
    paddingVertical: sizeScale(10),
    alignItems: "center",
    width: "100%",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
