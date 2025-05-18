import COLORS from '@assets/color';
import {TIconName} from '@components/base/svg_icon/types';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgIcon from '@components/base/svg_icon/SvgIcon';

interface IAttributeBadgeProps {
  title: string;
  icon: TIconName;
}
const AttributeBadge = ({title, icon}: IAttributeBadgeProps) => {
  const valueText = title.split(' ')[0];
  const unitText = title.split(' ')[1];

  return (
    <View style={styles.container}>
      <SvgIcon name={icon} size={18} />
      <Text style={styles.titleText}>
        <Text style={styles.valueText}>{valueText}</Text>
        {' ' + unitText}
      </Text>
    </View>
  );
};

export default AttributeBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(8),
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(8),
    backgroundColor: COLORS.surface,
    borderRadius: sizeScale(16),
  },
  titleText: {
    fontSize: 14.4,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    lineHeight: 16.42,
  },
  valueText: {
    fontWeight: '700',
  },
});
