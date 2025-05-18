import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THabitsDetailCardElementTextDark} from '../../habits';

interface ICheckListDetailElementCardTextDarkProps {
  data: THabitsDetailCardElementTextDark;
}

const CheckListDetailElementCardTextDark = ({
  data,
}: ICheckListDetailElementCardTextDarkProps) => {
  const isArray =
    Array.isArray(data.description) && data.description.length > 1;
  return (
    <View style={styles.container}>
      {data.title.length > 0 && (
        <Text style={styles.title_card}>{`${data.title}`}</Text>
      )}
      {!isArray ? (
        <Text style={styles.description_card}>{`${data.description}`}</Text>
      ) : (
        <>
          {data.description.map((item, index) => (
            <View
              key={`${item.slice(0, 5)}-${index}`}
              style={styles.description_card_wrapper}>
              <View style={{width: sizeScale(18)}}>
                <Text style={styles.description_card}>{`${index + 1}.`}</Text>
              </View>

              <View style={{flex: 1}}>
                <Text style={styles.description_card}>{`${item}`}</Text>
              </View>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default CheckListDetailElementCardTextDark;
const styles = StyleSheet.create({
  container: {
    padding: sizeScale(8),
    backgroundColor: COLORS.cardDark,
    borderRadius: sizeScale(8),
  },
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
  description_card_wrapper: {
    flexDirection: 'row',
    gap: sizeScale(8),
    flex: 1,
  },
});
