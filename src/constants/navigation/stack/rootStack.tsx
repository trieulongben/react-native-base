import { TRootStackParamList, TScreenItem } from "@hooks/app/useAppNavigation";

import OnboardingStack from "@navigation/stacks/onboardingStack/OnboardingStack";
export const ROOT_STACK: TScreenItem<TRootStackParamList>[] = [
  {
    key: 0,
    name: "OnboardingStack",
    component: OnboardingStack,
    options: { headerShown: false },
  },

  // {
  //   key: 1,
  //   name: "AuthenticationStack",
  //   component: AuthenticationStack,
  //   options: { headerShown: false },
  // },

  // {
  //   key: 2,
  //   name: "BottomTab",
  //   component: BottomTabs,
  //   options: { headerShown: false },
  // },

];
