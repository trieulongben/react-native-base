import {STORE_LINK} from '@configs/app';
import {Alert, Linking, Platform} from 'react-native';
import * as StoreReview from 'react-native-store-review';

export const requestRating = async () => {
  try {
    StoreReview.requestReview();
  } catch (error) {
    console.error('Error requesting review:', error);
    // Fallback option if in-app review is not available
    if (STORE_LINK) {
      Alert.alert('Rate Us', 'Would you mind rating the app?', [
        {text: 'No, Thanks', style: 'cancel'},
        {text: 'Sure', onPress: () => Linking.openURL(STORE_LINK)},
      ]);
    }
  }
};
