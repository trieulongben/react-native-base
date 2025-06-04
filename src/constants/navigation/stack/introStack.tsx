import {
  TOnboardingParamsList,
  TScreenItem,
} from "@hooks/app/useAppNavigation";

import { OnboardingEducationScreen } from "@navigation/stacks/onboardingStack/screens";

export const INTRO_STACK: TScreenItem<TOnboardingParamsList>[] = [
  {
    key: 0,
    name: "OnboardingEducationScreen",
    component: OnboardingEducationScreen,
    options: { headerShown: false },
  },
];
