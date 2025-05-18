import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import Assets from '../../assets';

const SplashScreen: React.FC = () => {
  return (
    <ImageBackground
      source={Assets.splashScreenTop.path as any}
      style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default SplashScreen;
