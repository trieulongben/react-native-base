import React from 'react';

import {StyleSheet, TextInputProps} from 'react-native';

import {FONTS} from '@configs/fonts';
import {sizeScale} from '@utils/dimension';

import COLORS from '@assets/color';

import TextInput from '../text_input/TextInput';
import SpecialFieldContainer from './SpecialFieldContainer';

type TTextFieldSpecialProps = {
  errorMessage?: string;
} & TextInputProps;

const TextFieldSpecial = ({errorMessage, ...props}: TTextFieldSpecialProps) => {
  return (
    <SpecialFieldContainer errorMessage={errorMessage}>
      <TextInput style={styles.textInput} {...props} />
    </SpecialFieldContainer>
  );
};
export default TextFieldSpecial;
const styles = StyleSheet.create({
  textInput: {
    fontFamily: FONTS['BeVietnamPro-Light'],
    fontSize: sizeScale(24),
    lineHeight: sizeScale(32),
    color: COLORS.onSurface,
  },
});
