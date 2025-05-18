import COLORS from '@assets/color';
import {Image} from '@components/base/image';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HighlightText from '../HighLightText';

const OnboardingEducation9 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image.Local
          source={'ONBOARDING_EDUCATION_7'}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <HighlightText
          text={
            'Our app <high>guides you through a series of exercises</high> to strengthen your tongue, soft palate, and entire upper airway'
          }
        />
      </View>
    </View>
  );
};

export default OnboardingEducation9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: sizeScale(33),
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
    flex: 1.5,
    paddingTop: sizeScale(73),
  },
});
