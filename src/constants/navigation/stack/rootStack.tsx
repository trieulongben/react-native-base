import {TRootStackParamList, TScreenItem} from '@hooks/app/useAppNavigation';

import BottomTabs from '@navigation/bottomTabs/BottomTabs';

import AuthenticationStack from '@navigation/stacks/authenticationStack/AuthenticationStack';
import OnboardingStack from '@navigation/stacks/onboardingStack/OnboardingStack';
import ExerciseDetailScreen from '@navigation/bottomTabs/screens/exercise-detail/ExerciseDetailScreen';
export const ROOT_STACK: TScreenItem<TRootStackParamList>[] = [
  {
    key: 0,
    name: 'OnboardingStack',
    component: OnboardingStack,
    options: {headerShown: false},
  },

  {
    key: 1,
    name: 'AuthenticationStack',
    component: AuthenticationStack,
    options: {headerShown: false},
  },

  {
    key: 2,
    name: 'BottomTab',
    component: BottomTabs,
    options: {headerShown: false},
  },
  {
    key: 3,
    name: 'ExerciseDetailScreen',
    component: ExerciseDetailScreen,
    options: {headerShown: false},
  },
];
