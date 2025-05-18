import COLORS from '@assets/color';

export type TColor = keyof typeof COLORS;
export type TSwitchColorConfig = {
  trackColor: TColor;
  thumbColor: TColor;
};

export type TSwitchSizeConfig = {
  trackWidth: number;
  trackHeight: number;
  iconSize: number;
};

export type TSwitchSize = '36' | '44' | '51';
