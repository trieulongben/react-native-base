import COLORS from '@assets/color';
import {Image} from '@components/base/image';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OnboardingEducation1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image.Local
          source={'APP_LOGO'}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.title}>Snoring & Sleep Apnea Trainer</Text>
        <Text style={styles.description}>
          Your journey to healthier and quieter sleep begins now
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image.Local
          source={'ONBOARDING_EDUCATION_1'}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default OnboardingEducation1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: sizeScale(16),
    paddingTop: sizeScale(50),
  },
  logo: {
    width: sizeScale(86),
    height: sizeScale(86),
    borderRadius: sizeScale(16),
    shadowColor: COLORS.textDark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: sizeScale(27),
  },
  title: {
    fontSize: sizeScale(40),
    fontWeight: '700',
    color: COLORS.textDark,
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
  },
});
