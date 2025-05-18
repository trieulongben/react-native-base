import {sizeScale} from '@utils/dimension';

import {TSwitchColorConfig, TSwitchSize, TSwitchSizeConfig} from './type';

const CIRCLE = sizeScale(18);
const PADDING = sizeScale(3);
const BORDER_WIDTH = sizeScale(1);

const animatedConfig = {
  mass: 1,
  damping: 15,
  stiffness: 120,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const SwitchColorConfig: {[state: string]: TSwitchColorConfig} = {
  ON: {
    trackColor: 'primary',
    thumbColor: 'background',
  },
  OFF: {
    trackColor: 'disable',
    thumbColor: 'background',
  },
};

const SwitchSizeConfig: {[size in TSwitchSize]: TSwitchSizeConfig} = {
  '36': {
    iconSize: 7.5,
    trackHeight: 20,
    trackWidth: 36,
  },
  '44': {
    iconSize: 8.2,
    trackHeight: 24,
    trackWidth: 44,
  },
  '51': {
    iconSize: 10,
    trackHeight: 31,
    trackWidth: 51,
  },
};

export {
  animatedConfig,
  BORDER_WIDTH,
  CIRCLE,
  PADDING,
  SwitchColorConfig,
  SwitchSizeConfig,
};
