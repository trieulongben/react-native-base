import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {ECheckListExercise} from '@constants/checklist/checklist';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HABITS_DETAIL} from '../habits';
import {useAppNavigation} from '@hooks/app/useAppNavigation';

interface ICheckListDetailHeaderProps {
  id: ECheckListExercise;
}
const CheckListDetailHeader = ({id}: ICheckListDetailHeaderProps) => {
  const title = HABITS_DETAIL[id].title;
  const TITLE = title;

  const navigation = useAppNavigation();

  const _handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity onPress={_handlePressBack}>
          <SvgIcon name="arrowBackIcon" size={24} fill="onSurface" />
        </TouchableOpacity>
        <Text style={styles.title}>{TITLE}</Text>
      </View>
    </View>
  );
};

export default CheckListDetailHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(16),
  },
  container: {
    gap: sizeScale(16),
    backgroundColor: COLORS.surface,
    paddingVertical: sizeScale(16),
  },
});
