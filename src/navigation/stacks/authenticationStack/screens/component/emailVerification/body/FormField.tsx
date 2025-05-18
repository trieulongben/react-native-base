import {Types} from '@type/index';

import React from 'react';

import {Form} from '@components/base';

type TVerifyCodeSchema = keyof Types.schema.verifyCodeSchema;
interface IFormFieldProps {}
const FormField = ({}: IFormFieldProps) => {
  return (
    <Form.Special<TVerifyCodeSchema>
      name="verifyCode"
      placeholder="Type code here"
      keyboardType="numeric"
    />
  );
};
export default FormField;
