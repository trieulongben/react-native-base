import {useAppNavigation} from '@hooks/app/useAppNavigation';

import React from 'react';

import {StyleSheet, View} from 'react-native';

import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';

interface IBottomTabHeaderProps {
  onSearch?: () => void;
}
const BottomTabHeader = ({onSearch}: IBottomTabHeaderProps) => {
  const navigation = useAppNavigation();

  const _handleNavAccount = () => {
    navigation.navigate('AccountStack', {screen: 'AccountScreen'});
  };

  return <View style={styles.container} />;
};
export default BottomTabHeader;
const styles = StyleSheet.create({
  container: {
    height: sizeScale(60),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: sizeScale(16),
    backgroundColor: COLORS.primary,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
});
