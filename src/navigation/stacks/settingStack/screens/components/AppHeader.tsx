import COLORS from '@assets/color';
import {SvgIcon} from '@components/base';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IAppHeader {
  title: string;
}

const AppHeaderComponent = ({title}: IAppHeader) => {
  const navigation = useAppNavigation();
  const _handlePressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={_handlePressBack} style={styles.backButton}>
        <SvgIcon name="arrowBackIcon" size={sizeScale(24)} fill="surface" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export const AppHeader = React.memo(AppHeaderComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(16),
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(12),
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
  },
  backButton: {
    padding: sizeScale(12),
    borderRadius: sizeScale(10000),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    position: 'absolute',
    left: sizeScale(16),
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    color: 'onSurface',
    fontFamily: 'Poppins',
    letterSpacing: 0.3,
  },
});
