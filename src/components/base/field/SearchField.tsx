import React, {useCallback, useState} from 'react';

import {Pressable, TextInputProps} from 'react-native';

import {Layout} from '../layout/index';
import Show from '../show/Show';
import SvgIcon from '../svg_icon/SvgIcon';
import TextInput from '../text_input/TextInput';
import FieldContainer from './FieldContainer';
import {useDebounceSearchValue} from './hooks';

interface ISearchFieldProps extends TextInputProps {
  onClearText?: () => void;
  onChangeText?: ((text: string) => void) | undefined;
}
const SearchField = ({
  onClearText,
  onChangeText,
  ...props
}: ISearchFieldProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const _debounceSearch = useDebounceSearchValue(2000);

  const _handleOnfocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const _handleOnEditing = useCallback(() => {
    setIsFocus(false);
  }, []);

  const _handleOnChangeText = useCallback(
    (text: string) => {
      setSearchValue(text);
      onChangeText && _debounceSearch(onChangeText)(text);
    },
    [_debounceSearch, onChangeText],
  );

  return (
    <FieldContainer isFocus={isFocus}>
      <SvgIcon name="magnifyingGlass" size={20} fill="iconGrey" />

      <Layout.Wrapper flex={1}>
        <TextInput
          onEndEditing={_handleOnEditing}
          onFocus={_handleOnfocus}
          onChangeText={_handleOnChangeText}
          value={searchValue}
          {...props}
        />
      </Layout.Wrapper>

      <Show.When isTrue={!!onClearText && isFocus}>
        <Pressable hitSlop={12} onPress={onClearText}>
          <SvgIcon name="xCircle" size={20} fill="iconGrey" />
        </Pressable>
      </Show.When>
    </FieldContainer>
  );
};

export default SearchField;
