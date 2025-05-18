import COLORS from '@assets/color';
import {IMAGES} from '@assets/images';
import {SvgIcon} from '@components/base';
import {TClinicalEvidence} from '@navigation/stacks/settingStack/screens/ClinicalEvidenceScreen';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IClinicalEvidenceItemProps {
  item: TClinicalEvidence;
}

const ClinicalEvidenceItem = ({item}: IClinicalEvidenceItemProps) => {
  const _handleOnPressLink = () => {
    Linking.openURL(item.link);
  };
  return (
    <View style={styles.evidenceItemContainer}>
      <SvgIcon name="checkBrokenIcon" size={sizeScale(24)} fill={'surface'} />
      <View style={styles.evidenceItemTextContainer}>
        <Text style={styles.evidenceItemText}>{item.text}</Text>
        <TouchableOpacity onPress={_handleOnPressLink}>
          <Text style={styles.evidenceItemLinkText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ONBOARDING_EVIDENCE_LIST: TClinicalEvidence[] = [
  {
    text: '2015 Study: Just tongue exercises alone reduced OSA events by 48%.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19234106',
  },
  {
    text: '2019 Study: Inspiratory muscle training reduced apnea events per hour & snoring',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19234106',
  },
  {
    text: 'Multiple Studies: Mouth and throat exercises improve sleep quality and reduce symptoms',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37010143',
  },
];

const OnboardingEducation8 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={IMAGES.ONBOARDING_BG_4}
        style={styles.container}
        resizeMode="stretch">
        <View style={styles.imageHolder} />
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Scientific Support</Text>
            <Text style={styles.description}>
              Research shows that orofacial exercises can significantly reduce
              snoring and sleep apnea:
            </Text>
          </View>
          <View style={styles.paperListContainer}>
            {ONBOARDING_EVIDENCE_LIST.map((item, index) => (
              <ClinicalEvidenceItem key={`${item.text}-${index}`} item={item} />
            ))}
          </View>

          <View style={styles.supportTextContainer}>
            <Text style={styles.supportText}>
              See links to 10+ more studies in settings
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default OnboardingEducation8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    height: sizeScale(280),
  },
  contentContainer: {
    flex: 1,
  },
  logo: {
    width: sizeScale(86),
    height: sizeScale(86),
  },
  titleContainer: {
    paddingHorizontal: sizeScale(42),
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizeScale(24),
    paddingBottom: sizeScale(20),
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
    fontSize: sizeScale(18),
    color: COLORS.textDescription,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    letterSpacing: 0.2,
    lineHeight: sizeScale(24),
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingRight: sizeScale(25),
  },
  paperListContainer: {
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(8),
  },

  supportTextContainer: {
    paddingHorizontal: sizeScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: sizeScale(40),
  },
  supportText: {
    fontSize: sizeScale(15),
    color: COLORS.textDescription,
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: sizeScale(33),
    textAlign: 'center',
  },
  evidenceItemContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: sizeScale(10),
    gap: sizeScale(16),
    flexDirection: 'row',
    borderRadius: sizeScale(16),
    paddingVertical: sizeScale(10),
  },
  evidenceItemTextContainer: {
    flex: 1,
    gap: sizeScale(4),
  },
  evidenceItemText: {
    fontSize: sizeScale(15),
    color: '#6B6B6B',
    fontFamily: 'Inter-Medium',
  },
  evidenceItemLinkText: {
    fontSize: sizeScale(16),
    color: COLORS.primary,
    fontFamily: 'Inter-Bold',
    textDecorationLine: 'underline',
    letterSpacing: 0.5,
  },
});
