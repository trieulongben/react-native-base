import {Layout} from '@components/base/layout';
import {Validators} from '@configs/validators';
import {zodResolver} from '@hookform/resolvers/zod';
import {TVerifyCodeSchema} from '@type/schemaType';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {EmailVerification} from './component/emailVerification';

const EmailVerificationScreen = () => {
  const methods = useForm<TVerifyCodeSchema>({
    resolver: zodResolver(Validators.verifyCodeSchema),
    defaultValues: {verifyCode: ''},
  });

  return (
    <FormProvider {...methods}>
      <Layout.Screen>
        <Layout.BodyScrollView>
          <Layout.Wrapper paddingHorizontal={16} paddingVertical={24} gap={32}>
            <Layout.Wrapper gap={8}>
              <EmailVerification.VerifyYourEmail />
              <EmailVerification.ResendCode />
            </Layout.Wrapper>
            <EmailVerification.FormField />
          </Layout.Wrapper>
        </Layout.BodyScrollView>
        <EmailVerification.NextStepButton />
      </Layout.Screen>
    </FormProvider>
  );
};

export default EmailVerificationScreen;
