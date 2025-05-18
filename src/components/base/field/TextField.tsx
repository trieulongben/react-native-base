import React, {useCallback, useState} from 'react';

import {TextInputProps} from 'react-native';

import TextInput from '../text_input/TextInput';
import FieldContainer from './FieldContainer';

type TTextFieldProps = {
  label?: string;
  errorMessage?: string;
  value: string;

  onClearText?: () => void;
} & TextInputProps;
const TextField = ({
  label,
  errorMessage,

  onClearText,
  ...props
}: TTextFieldProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const _handleOnfocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const _handleOnEditing = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <FieldContainer label={label} errorMessage={errorMessage} isFocus={isFocus}>
      <TextInput
        onEndEditing={_handleOnEditing}
        onFocus={_handleOnfocus}
        onClearText={onClearText}
        {...props}
      />
    </FieldContainer>
  );
};
export default TextField;
