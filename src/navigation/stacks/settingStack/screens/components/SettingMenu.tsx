import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Share} from 'react-native';
import {SvgIcon} from '@components/base';
import {sizeScale} from '@utils/dimension';
import COLORS from '@assets/color';
import {TIconName} from '@components/base/svg_icon/types';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {requestRating} from '@services/market';
import {STORE_LINK} from '@configs/app';
import {setStorageData} from '@utils/storage';

type TSection = {
  title: string;
  tabs: {icon: TIconName; title: string; onPress: () => void}[];
};

const useSettingMenu = () => {
  const navigation = useAppNavigation();

  const [enableTesting, setEnableTesting] = useState(0);

  const _handleToggleTesting = () => {
    setEnableTesting(enableTesting + 1);
    if (enableTesting === 3) {
      setEnableTesting(0);
      setStorageData('enableTesting', true);
    } else {
      setStorageData('enableTesting', false);
    }
  };

  const _handlePressReminder = () => {
    navigation.navigate('SettingStack', {
      screen: 'ReminderScreen',
    });
  };

  const _handlePressClinicalEvidence = () => {
    navigation.navigate('SettingStack', {
      screen: 'ClinicalEvidenceScreen',
    });
  };

  const _handlePressOnboardingEducation = () => {
    navigation.push('OnboardingStack', {
      screen: 'OnboardingEducationScreen',
      params: {
        isFromSetting: true,
      },
    });
  };

  const sections: TSection[] = [
    {
      title: 'For you',
      tabs: [
        {
          icon: 'uploadIcon',
          title: 'Share app',
          onPress: () => {
            Share.share({
              message: `Check out this app! It’s a natural way to reduce snoring and improve sleep by strengthening  your tongue and throat muscles! its backed by tons of science showing strong muscles help prevent airway collapse ${STORE_LINK}`,
            });
          },
        },
        {
          icon: 'feedBackIcon',
          title: 'Rate us',
          onPress: () => {
            requestRating();
          },
        },
        {icon: 'bellIcon', title: 'Reminders', onPress: _handlePressReminder},
      ],
    },
    {
      title: 'About',
      tabs: [
        {
          icon: 'questionOutlineIcon',
          title: 'How it works',
          onPress: _handlePressOnboardingEducation,
        },
        {
          icon: 'scienceIcon',
          title: 'Clinical evidence',
          // onPress: () => {},
          onPress: _handlePressClinicalEvidence,
        },
      ],
    },
    {
      title: 'Support & feedback',
      tabs: [
        {
          icon: 'chatIcon',
          title: 'Feature request',
          onPress: () => {
            _handleToggleTesting();
          },
        },
        {icon: 'askQuestionIcon', title: 'Contact us', onPress: () => {}},
        {icon: 'bugIcon', title: 'Report a bug', onPress: () => {}},
      ],
    },
    {
      title: 'Account',
      tabs: [
        {
          icon: 'shieldOutlineIcon',
          title: 'Privacy Policy',
          onPress: () => {},
        },
        {icon: 'termIcon', title: 'Terms of Use', onPress: () => {}},
      ],
    },
  ];

  return {sections};
};

const SettingMenu = () => {
  const {sections} = useSettingMenu();

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={`${section.title}-${index}`} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.tabsContainer}>
            {section.tabs.map((tab, tabIndex) => {
              const isLast = tabIndex === section.tabs.length - 1;

              return (
                <TouchableOpacity
                  key={`${tab.title}-${tabIndex}`}
                  style={[styles.tab, isLast && styles.lastTab]}
                  onPress={tab.onPress}>
                  <SvgIcon
                    name={tab.icon}
                    size={sizeScale(30)}
                    fill="surface"
                  />
                  <Text style={styles.tabTitle}>{tab.title}</Text>
                  <SvgIcon
                    name="chevronRightGreyIcon"
                    size={sizeScale(20)}
                    fill="surface"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    paddingBottom: sizeScale(20),
  },
  section: {
    marginBottom: sizeScale(24),
  },
  tabsContainer: {
    shadowColor: COLORS.onSurface,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
    borderRadius: sizeScale(16),
    backgroundColor: COLORS.card,
  },
  sectionTitle: {
    fontSize: 25.62,
    fontWeight: '600',
    color: COLORS.onSurface,
    marginBottom: sizeScale(12),
    fontFamily: 'Inter',
    lineHeight: 36.6,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    paddingHorizontal: sizeScale(18.5),
    paddingVertical: sizeScale(23),
  },
  tabTitle: {
    flex: 1,
    fontSize: 16,
    lineHeight: 23,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: COLORS.onSurface,
    marginLeft: sizeScale(18.28),
  },
  lastTab: {
    borderBottomWidth: 0,
  },
});

export default SettingMenu;
