import COLORS from '@assets/color';
import {IMAGES} from '@assets/images';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import HighlightText from '../HighLightText';

const OnboardingEducation6 = () => {
  return (
    <ImageBackground
      source={IMAGES.ONBOARDING_BG_7}
      style={styles.container}
      resizeMode="stretch">
      <View style={styles.imageHolder} />

      <View style={styles.textContainer}>
        <HighlightText
          text={
            'Toning the tongue muscles helps maintain its position on the roof of your mouth. This means its <high>less likely to fall back into your throat and cause breathing issues</high>'
          }
        />
      </View>
    </ImageBackground>
  );
};

export default OnboardingEducation6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: sizeScale(16),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: sizeScale(86),
    height: sizeScale(86),
  },
  title: {
    fontSize: sizeScale(28),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  highlight: {
    fontSize: sizeScale(28),
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  description: {
    fontSize: sizeScale(24),
    color: COLORS.textDark,
    fontFamily: 'Inter-Regular',
    letterSpacing: 0.2,
    lineHeight: sizeScale(33),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingRight: sizeScale(25),
  },
});
