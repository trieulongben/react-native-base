import COLORS from '@assets/color';
import {Image} from '@components/base/image';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OnboardingEducation11 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image.Local
          source={'FACE_IMAGE'}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Lets build your{' '}
          <Text style={styles.titleHighlight}>6 week program</Text>
        </Text>
        <Text style={styles.description}>
          {
            'To create a plan tailored specifically to you, we’ll ask a few quick questions about your sleep and breathing \n \n This helps us understand your unique needs and challenges so we can design the most effective plan that strengthens your airway muscles and improves your sleep.'
          }
        </Text>
      </View>
    </View>
  );
};

export default OnboardingEducation11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: sizeScale(36),
    justifyContent: 'center',
    gap: sizeScale(23),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizeScale(22),
  },

  title: {
    fontSize: sizeScale(38),
    fontFamily: 'Inter-ExtraBold',
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  titleHighlight: {
    color: COLORS.primary,
  },
  highlight: {
    fontSize: sizeScale(28),
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  description: {
    fontSize: sizeScale(20),
    color: COLORS.textDescription,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: sizeScale(200),
    height: sizeScale(200),
  },
});
