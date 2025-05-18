import {IMAGES} from '@assets/images';
import LayoutScreen from '@components/base/layout/LayoutScreen';
import {useAppNavigation, useAppRoute} from '@hooks/app/useAppNavigation';
import React, {useRef, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OnboardingScreenComponents} from './components';
import {IOnboardingEducationBody} from './components/OnboardingEducationBody';
import {IOnboardingEducationFooterRef} from './components/OnboardingEducationFooter';
import {OnboardingEducationPagesList} from './components/pages';

const OnboardingEducationScreen = () => {
  const footerRef = useRef<IOnboardingEducationFooterRef>(null);
  const bodyRef = useRef<IOnboardingEducationBody>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {params} = useAppRoute('OnboardingEducationScreen');
  const navigation = useAppNavigation();

  const _handleOnPress = () => {
    const nextIndex = currentIndex + 1;
    footerRef.current?.triggerWaitingOpacity();

    if (nextIndex < 0) {
      return;
    }

    if (nextIndex > 0) {
      footerRef.current?.changeState('PRIMARY_AND_SECONDARY');
    }

    const isFromSetting = params?.isFromSetting;

    if (
      isFromSetting &&
      nextIndex === OnboardingEducationPagesList.length - 1
    ) {
      navigation.goBack();
      return;
    }

    if (nextIndex === OnboardingEducationPagesList.length) {
      navigation.navigate('OnboardingSurveyScreen');
      return;
    }

    bodyRef.current?.scrollToIndex(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const _handleOnSecondaryPress = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      return;
    }

    if (nextIndex === 0) {
      footerRef.current?.changeState('PRIMARY_ONLY');
    }

    bodyRef.current?.scrollToIndex(nextIndex);
    setCurrentIndex(nextIndex);
  };

  return (
    <LayoutScreen isSafeArea={false}>
      <ImageBackground source={IMAGES.ONBOARDING_BG_1} style={styles.container}>
        <SafeAreaView edges={['top']} />
        <OnboardingScreenComponents.Body ref={bodyRef} />
        <OnboardingScreenComponents.Footer
          ref={footerRef}
          onPress={_handleOnPress}
          onSecondaryPress={_handleOnSecondaryPress}
        />
      </ImageBackground>
    </LayoutScreen>
  );
};

export default OnboardingEducationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
