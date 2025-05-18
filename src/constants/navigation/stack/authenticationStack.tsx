import {
  TAuthenticationParamsList,
  TScreenItem,
} from '@hooks/app/useAppNavigation';
import EmailVerificationScreen from '@navigation/stacks/authenticationStack/screens/EmailVerificationScreen';
import SignInScreen from '@navigation/stacks/authenticationStack/screens/SignInScreen';

export const AUTHENTICATION_STACK: TScreenItem<TAuthenticationParamsList>[] = [
  {
    key: 0,
    name: 'SignInScreen',
    component: SignInScreen,
    options: {headerShown: false},
  },
  {
    key: 1,
    name: 'EmailVerificationScreen',
    component: EmailVerificationScreen,
    options: {headerShown: false},
  },
];
