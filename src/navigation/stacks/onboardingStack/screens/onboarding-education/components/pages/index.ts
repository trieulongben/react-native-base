import OnboardingEducation1 from './OnboardingEducation1';
import OnboardingEducation10 from './OnboardingEducation10';
import OnboardingEducation11 from './OnboardingEducation11';
import OnboardingEducation2 from './OnboardingEducation2';
import OnboardingEducation3 from './OnboardingEducation3';
import OnboardingEducation5 from './OnboardingEducation5';
import OnboardingEducation6 from './OnboardingEducation6';
import OnboardingEducation7 from './OnboardingEducation7';
import OnboardingEducation8 from './OnboardingEducation8';
import OnboardingEducation9 from './OnboardingEducation9';
export const OnboardingEducationPages = {
  Page1: OnboardingEducation1,
  Page2: OnboardingEducation2,
  Page3: OnboardingEducation3,
  Page5: OnboardingEducation5,
  Page6: OnboardingEducation6,
  Page7: OnboardingEducation7,
  Page8: OnboardingEducation8,
  Page9: OnboardingEducation9,
  Page10: OnboardingEducation10,
  Page11: OnboardingEducation11,
};

export type TOnboardingEducationPage = {
  id: number;
  component: React.ComponentType<any>;
};

export const OnboardingEducationPagesList = [
  {
    id: 1,
    component: OnboardingEducationPages.Page1,
  },
  {
    id: 2,
    component: OnboardingEducationPages.Page2,
  },
  {
    id: 3,
    component: OnboardingEducationPages.Page3,
  },
  {
    id: 5,
    component: OnboardingEducationPages.Page5,
  },
  {
    id: 6,
    component: OnboardingEducationPages.Page6,
  },
  {
    id: 7,
    component: OnboardingEducationPages.Page7,
  },
  {
    id: 8,
    component: OnboardingEducationPages.Page8,
  },
  {
    id: 9,
    component: OnboardingEducationPages.Page9,
  },
  {
    id: 10,
    component: OnboardingEducationPages.Page10,
  },
  {
    id: 11,
    component: OnboardingEducationPages.Page11,
  },
];
