import {ECheckListExercise} from '@constants/checklist/checklist';
import {
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import React from 'react';

export type TOnboardingParamsList = {
  WelcomeScreen: undefined;
  ShoppingScreen: undefined;
  OnboardingSurveyScreen: undefined;
  OnboardingEducationScreen: {
    isFromSetting?: boolean;
  };
};

export type TAuthenticationParamsList = {
  SignInScreen: undefined;
  EmailVerificationScreen: {email: string; password: string};
};

export type TAccountParamsList = {
  AccountScreen: undefined;
  EditAccountScreen: undefined;
};

export type TInvestParamsList = {
  InvestDetailScreen: {investId: string};
  SignUpScreen: undefined;
  EmailSubscriptionScreen: undefined;
  SearchScreen: undefined;
  FundedListScreen: undefined;
};

export type TBottomTabParamsList = {
  HomeScreen: undefined;
  HabitsScreen: undefined;
};

export type TSettingParamsList = {
  SettingScreen: undefined;
  ReminderScreen: undefined;
  ClinicalEvidenceScreen: undefined;
};

export type TRootStackParamList = {
  OnboardingStack: NavigatorScreenParams<TOnboardingParamsList>;
  BottomTab: NavigatorScreenParams<TBottomTabParamsList>;
  SettingStack: NavigatorScreenParams<TSettingParamsList>;
  CheckListDetailScreen: {id: ECheckListExercise};
  ExerciseDetailScreen: {id: string};
  AuthenticationStack: NavigatorScreenParams<TAuthenticationParamsList>;
};

export type AppStackParamsList = TAuthenticationParamsList &
  TBottomTabParamsList &
  TRootStackParamList &
  TSettingParamsList;

export type TScreenItem<T> = {
  key: number;
  name: keyof T;
  component: React.FC;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<AppStackParamsList, keyof AppStackParamsList>;
        navigation: any;
      }) => NativeStackNavigationOptions);
};

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<AppStackParamsList>>();
};

export const useAppRoute = <RouteName extends keyof AppStackParamsList>(
  name: RouteName,
) => {
  return useRoute<RouteProp<AppStackParamsList, typeof name>>();
};
