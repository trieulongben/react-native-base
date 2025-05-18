import React from 'react';

import AppStack from '@components/base/navigation/AppStack';
import {AUTHENTICATION_STACK} from '@constants/navigation/stack/authenticationStack';

const AuthenticationStack = () => {
  return (
    <AppStack
      initialRouteName="SignInScreen"
      stackData={AUTHENTICATION_STACK}
    />
  );
};
export default AuthenticationStack;
