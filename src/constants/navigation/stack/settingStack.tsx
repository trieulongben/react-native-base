import {TSettingParamsList, TScreenItem} from '@hooks/app/useAppNavigation';

import {SettingScreen} from '@navigation/stacks/settingStack/screens';
import ClinicalEvidenceScreen from '@navigation/stacks/settingStack/screens/ClinicalEvidenceScreen';
import ReminderScreen from '@navigation/stacks/settingStack/screens/ReminderScreen';

export const SETTING_STACK: TScreenItem<TSettingParamsList>[] = [
  {
    key: 0,
    name: 'SettingScreen',
    component: SettingScreen,
    options: {headerShown: false},
  },
  {
    key: 1,
    name: 'ReminderScreen',
    component: ReminderScreen,
    options: {headerShown: false},
  },
  {
    key: 2,
    name: 'ClinicalEvidenceScreen',
    component: ClinicalEvidenceScreen,
    options: {headerShown: false},
  },
];
