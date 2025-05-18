import COLORS from '@assets/color';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import RunningCommandItem from './CheckListItem';

const CheckListBody = () => {
  const navigation = useAppNavigation();

  const commandQueueIds = useAppSelector(state => state.command.commandQueue);

  const _renderItem: ListRenderItem<string> = ({item}) => {
    // const commandItem = useAppSelector(state =>
    //   commandSelectors.selectById(state, item),
    // );

    const _handleOnPressLearnMore = () => {
      navigation.navigate('CheckListDetailScreen', {
        id: item,
      });
    };

    return (
      <View key={item} style={styles.item}>
        <RunningCommandItem id={item} onPress={_handleOnPressLearnMore} />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: COLORS.surface}}>
      <View style={styles.body}>
        <Text style={styles.title}>
          Follow these personalized recommendations to further reduce snoring
        </Text>
        <FlatList<string>
          data={commandQueueIds}
          renderItem={_renderItem}
          contentContainerStyle={styles.listItemContainerStyle}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default CheckListBody;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    height: '100%',
    padding: sizeScale(16),
    paddingHorizontal: sizeScale(20),
    gap: sizeScale(16),
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: COLORS.outlineDark,
    textAlign: 'center',
  },
  listContentContainer: {
    // flex: 1,
    gap: sizeScale(16),
  },
  listItemContainerStyle: {
    gap: sizeScale(16),
    flexGrow: 1,
    paddingBottom: sizeScale(150),
  },
  item: {},
});
