import {SCREEN_WIDTH} from '@utils/dimension';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {OnboardingEducationPagesList, TOnboardingEducationPage} from './pages';

export interface IOnboardingEducationBody {
  scrollToIndex: (index: number) => void;
}

interface IOnboardingEducationBodyProps {}

const OnboardingEducationBody = forwardRef<
  IOnboardingEducationBody,
  IOnboardingEducationBodyProps
>((_, ref) => {
  const flatlistRef = useRef<FlatList<TOnboardingEducationPage>>(null);

  const _handleScrollToIndex = (index: number) => {
    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  useImperativeHandle(ref, () => ({
    scrollToIndex: _handleScrollToIndex,
  }));

  const _renderItem: ListRenderItem<TOnboardingEducationPage> = useCallback(
    ({item}) => {
      return (
        <View style={styles.itemContainer}>
          <item.component />
        </View>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList<TOnboardingEducationPage>
        ref={flatlistRef}
        data={OnboardingEducationPagesList}
        renderItem={_renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        contentContainerStyle={styles.contentContainer}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0}
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={16}
        scrollEnabled={false}
      />
    </View>
  );
});

export default OnboardingEducationBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
  itemContainer: {
    width: SCREEN_WIDTH,
    height: '100%',
  },
});
