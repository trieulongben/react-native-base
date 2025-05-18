import COLORS from '@assets/color';
import {SvgIcon} from '@components/base';
import {EDay} from '@constants/exercise/program';
import {useAppSelector} from '@stores/hooks';
import {commandSelectors} from '@stores/slices/commandSlice';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export enum ETabItemState {
  LOCKED = 'locked',
  NEUTRAL = 'neutral',
  CHECKED = 'checked',
}

type TTabData = {
  id: EDay;
  title: string;
  state: ETabItemState;
  isSelected: boolean;
};

interface ITabRowProps {
  tabs: string[];
}

const TabRow = ({tabs}: ITabRowProps) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.container}>
      {tabs.map(item => {
        return <TabItem id={item} />;
      })}
    </ScrollView>
  );
};

interface ITabItemProps {
  id: string;
}
const TabItem = ({id}: ITabItemProps) => {
  const isBackgroundPrimrary = false;

  const tabItemStyle = StyleSheet.compose(styles.tabItem, {
    backgroundColor: isBackgroundPrimrary ? COLORS.primary : COLORS.surface,
    borderColor: isBackgroundPrimrary ? COLORS.primary : COLORS.disable,
  });

  const tabItemTextStyle = StyleSheet.compose(styles.tabItemText, {
    color: isBackgroundPrimrary ? COLORS.onPrimary : COLORS.onSurface,
  });

  const title = useAppSelector(
    state => commandSelectors.selectById(state.command, id)?.name,
  );

  console.log('title', title);

  return (
    <TouchableOpacity style={tabItemStyle}>
      <View style={styles.tabItemContent}>
        {false && (
          <SvgIcon
            fill={isBackgroundPrimrary ? 'primary' : 'surface'}
            name="lockIcon"
            size={18}
          />
        )}
        {false && <SvgIcon fill={'onSurface'} name="checkIcon" size={18} />}
        <Text numberOfLines={1} style={tabItemTextStyle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(4),
  },
  tabItem: {
    paddingVertical: sizeScale(10),
    paddingHorizontal: sizeScale(19),
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    borderWidth: 1,
  },
  tabItemText: {
    color: COLORS.onPrimary,
    fontWeight: '500',
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 20,
  },
  tabItemContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: sizeScale(8),
    alignItems: 'center',
    width: sizeScale(55),
    letterSpacing: 0.1,
  },
});
