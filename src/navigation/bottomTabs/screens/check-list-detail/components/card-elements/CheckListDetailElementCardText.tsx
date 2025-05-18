import React from 'react';
import {THabitsDetailCardElementText} from '../../habits';
import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import {StyleSheet, Text} from 'react-native';

interface ICheckListDetailElementCardTextProps {
  data: THabitsDetailCardElementText;
}

const CheckListDetailElementCardText = ({
  data,
}: ICheckListDetailElementCardTextProps) => {
  return (
    <>
      {data.title && <Text style={styles.title_card}>{`${data.title}`}</Text>}
      {data.description && (
        <Text style={styles.description_card}>{`${data.description}`}</Text>
      )}
    </>
  );
};

export default CheckListDetailElementCardText;
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
});
