import {Types} from '@type/index';

import React, {useCallback, useState} from 'react';

import {Form, Layout} from '@components/base';

type TEmailSchema = keyof Types.schema.logInSchema;

interface IFormFieldProps {}
const FormField = ({}: IFormFieldProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const _handleToggleShowPassword = useCallback(() => {
    setIsShowPassword(prev => !prev);
  }, []);

  return (
    <Layout.Wrapper gap={32} paddingHorizontal={16}>
      <Form.Special<TEmailSchema> name="email" placeholder="Email" />
      <Form.Special<TEmailSchema>
        name="password"
        placeholder="Password"
        secureTextEntry={!isShowPassword}
      />
      {/*
      <Checkbox value={isShowPassword} onPress={_handleToggleShowPassword}>
        <Text size="14" weight="light" color="onSurface">
          See password
        </Text>
      </Checkbox> */}
    </Layout.Wrapper>
  );
};
export default FormField;
