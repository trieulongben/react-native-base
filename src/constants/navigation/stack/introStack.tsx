import {TOnboardingParamsList, TScreenItem} from '@hooks/app/useAppNavigation';

import {
  OnboardingEducationScreen,
  OnboardingSurveyScreen,
} from '@navigation/stacks/onboardingStack/screens';
import ShoppingScreen from '@navigation/stacks/onboardingStack/screens/ShoppingScreen';
import WelcomeScreen from '@navigation/stacks/onboardingStack/screens/WelcomeScreen';

export const INTRO_STACK: TScreenItem<TOnboardingParamsList>[] = [
  {
    key: 0,
    name: 'WelcomeScreen',
    component: WelcomeScreen,
  },
  {
    key: 1,
    name: 'ShoppingScreen',
    component: ShoppingScreen,
    options: {headerShown: false},
  },
  {
    key: 2,
    name: 'OnboardingSurveyScreen',
    component: OnboardingSurveyScreen,
    options: {headerShown: false},
  },
  {
    key: 3,
    name: 'OnboardingEducationScreen',
    component: OnboardingEducationScreen,
    options: {headerShown: false},
  },
];
