import {Layout} from '@components/base/layout';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {LoginWithMail} from './component/logInWithMail';

import {zodResolver} from '@hookform/resolvers/zod';
import {TLogInSchema} from '@type/schemaType';
import {Validators} from '@configs/validators';

const SignInScreen = () => {
  const methods = useForm<TLogInSchema>({
    resolver: zodResolver(Validators.logInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <Layout.Screen paddingHorizontal={10}>
        <LoginWithMail.Header />
        <Layout.BodyScrollView>
          <LoginWithMail.FormField />
        </Layout.BodyScrollView>
        <LoginWithMail.LogInButton />
      </Layout.Screen>
    </FormProvider>
  );
};

export default SignInScreen;
