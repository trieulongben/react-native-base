import React from 'react';

import {Layout, Text} from '@components/base';

interface IVerifyYourEmailProps {}
const VerifyYourEmail = ({}: IVerifyYourEmailProps) => {
  return (
    <Layout.Wrapper gap={8}>
      <Text size="18" weight="semiBold" color="primary">
        Verify your email
      </Text>
      <Text size="14" weight="light" color="onSurface">
        Enter the 6-digit code you received to verify your email. Did not
        receive one? Tap the Resend button to try again.
      </Text>
    </Layout.Wrapper>
  );
};
export default VerifyYourEmail;
