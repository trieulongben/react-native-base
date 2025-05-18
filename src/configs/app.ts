import {Platform} from 'react-native';

const APP_STORE_LINK = `itms-apps://apps.apple.com/app/id${'IOS_APP_ID'}?action=write-review`;
const PLAY_STORE_LINK = `market://details?id=${'ANDROID_APP_ID'}`;

export const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android: PLAY_STORE_LINK,
});

export const APP_LINK = 'App link -- add later';
