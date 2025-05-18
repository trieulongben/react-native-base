import DeviceInfo from 'react-native-device-info';

import {Platform} from 'react-native';

export const isIosPlatform = Platform.OS === 'ios';
export const isDynamicIsland = DeviceInfo.hasDynamicIsland();

export const check = {
  isIosPlatform,
  isDynamicIsland,
};
