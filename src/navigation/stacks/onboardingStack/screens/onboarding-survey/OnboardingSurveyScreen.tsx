import React from 'react';
import {View} from 'react-native';

enum ESurveyType {
  SINGLE_PICK = 'single_pick',
  MULTI_PICK = 'multi_pick',
  SCROLLER = 'scroller',
}

type TSurveyPage = {
  id: number;
  title: string;
  subtitle: string;
  body: React.ReactNode;
};

const OnboardingSurveyScreen = ({isFromSetting}: ISurveyProps) => {
  return <View />;
};

export default OnboardingSurveyScreen;
