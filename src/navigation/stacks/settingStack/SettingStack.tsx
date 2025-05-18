import React from 'react';

import AppStack from '@components/base/navigation/AppStack';
import {SETTING_STACK} from '@constants/navigation/stack/settingStack';

const SettingStack = () => {
  return (
    <AppStack initialRouteName="SettingScreen" stackData={SETTING_STACK} />
  );
};
export default SettingStack;
