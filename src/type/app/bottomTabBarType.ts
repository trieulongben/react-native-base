import {TBottomTabParamsList} from '@hooks/app/useAppNavigation';

import {TIconName} from '@components/base/svg_icon/types';

export type TBottomTabBarHasMap = {
  [n in keyof TBottomTabParamsList | string]: {
    name: string;
    iconActive: TIconName;
    iconUnActive: TIconName;
  };
};
