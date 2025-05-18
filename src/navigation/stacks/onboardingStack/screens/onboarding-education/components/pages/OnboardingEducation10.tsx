import COLORS from '@assets/color';
import {Image} from '@components/base/image';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OnboardingEducation10 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          After 6 weeks users experience an average of:
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image.Local
          source={'ONBOARDING_EDUCATION_8'}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default OnboardingEducation10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sizeScale(36),
    paddingTop: sizeScale(80),
  },
  textContainer: {
    paddingHorizontal: sizeScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: sizeScale(86),
    height: sizeScale(86),
  },
  title: {
    fontSize: sizeScale(32),
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
  },
});
