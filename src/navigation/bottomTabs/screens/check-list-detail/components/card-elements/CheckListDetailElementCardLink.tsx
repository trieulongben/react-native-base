import React from 'react';
import {THabitsDetailCardElementText} from '../../habits';
import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import {Linking, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ICheckListDetailElementCardLinkProps {
  data: THabitsDetailCardElementText;
}

const CheckListDetailElementCardLink = ({
  data,
}: ICheckListDetailElementCardLinkProps) => {
  const _handleOnClick = () => {
    Linking.openURL(data.link);
  };
  return (
    <>
      {data.text && (
        <TouchableOpacity onPress={_handleOnClick}>
          <Text style={styles.link_card}>{`${data.text}`}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CheckListDetailElementCardLink;
const styles = StyleSheet.create({
  description_card: {
    fontSize: sizeScale(16),
    color: COLORS.onSurfaceDark,
    fontFamily: 'Inter-Regular',
  },
  title_card: {
    fontSize: sizeScale(16),
    color: COLORS.onSurfaceDark,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  link_card: {
    fontSize: sizeScale(16),
    color: COLORS.link,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
