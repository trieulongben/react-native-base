import COLORS from '@assets/color';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet} from 'react-native';
import {CardElements} from '.';
import {THabitsDetailCardElement} from '../../habits';

interface ICheckListDetailCardElementProps {
  data: THabitsDetailCardElement;
}

const CheckListDetailCardElement = ({
  data,
}: ICheckListDetailCardElementProps) => {
  const Element = CardElements[data.type];

  return <Element data={data} />;
};

export default CheckListDetailCardElement;
