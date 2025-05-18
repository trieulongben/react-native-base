import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ICheckListHeaderProps {}
const CheckListHeader = ({}: ICheckListHeaderProps) => {
  const TITLE = 'Running process';
  const navigation = useAppNavigation();

  const _handlePressSetting = () => {
    navigation.navigate('SettingStack', {
      screen: 'SettingScreen',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{TITLE}</Text>
        {/* <TouchableOpacity onPress={_handlePressSetting}>
          <SvgIcon name="settingsIcon" size={sizeScale(24)} fill="onSurface" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default CheckListHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
  },
  container: {
    gap: sizeScale(16),
    backgroundColor: COLORS.surface,
    paddingVertical: sizeScale(16),
  },
});
