import COLORS from '@assets/color';
import {ECheckListExercise} from '@constants/checklist/checklist';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {HABITS_DETAIL} from '../habits';
import CheckListDetailElement from './CheckListDetailElement';

interface ICheckListDetailBody {
  id: ECheckListExercise;
}

const CheckListDetailBody = ({id}: ICheckListDetailBody) => {
  const data = HABITS_DETAIL[id].data;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.listContentContainer}>
      <View style={styles.body}>
        {data.map((item, idx) => {
          return (
            <CheckListDetailElement
              key={`${item.type} - ${idx}`}
              type={item.type}
              // @ts-ignore
              data={item}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CheckListDetailBody;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.surface},
  body: {
    backgroundColor: COLORS.background,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
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
    gap: sizeScale(16),
  },
  listItemContainerStyle: {
    gap: sizeScale(16),
  },
  item: {},
});
