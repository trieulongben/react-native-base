import {Controller, useFormContext} from 'react-hook-form';

import React from 'react';

import {TextInputProps} from 'react-native';

import {Field} from '../../base';

type TFormFieldSpecialProps<T> = {
  name: T;
  placeholder?: string;
} & TextInputProps;
const FormFieldSpecial = <T extends string>({
  name,
  placeholder = 'Type here',
  ...props
}: TFormFieldSpecialProps<T>) => {
  const {
    formState: {errors},
    control,
  } = useFormContext();

  return (
    <>
      <Controller
        name={name || ''}
        control={control}
        render={({field: {onChange, value}}) => (
          <Field.Special
            placeholder={placeholder}
            errorMessage={errors?.[name]?.message?.toString() || ''}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />
    </>
  );
};
export default FormFieldSpecial;
