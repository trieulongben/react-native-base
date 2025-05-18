import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {
  FlatList,
  Linking,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from './components';

export type TClinicalEvidence = {
  text: string;
  link: string;
};

const CLINICAL_EVIDENCE: TClinicalEvidence[] = [
  {
    text: '2015 Study: Tongue exercises reduced OSA events by 48%.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4470553/',
  },
  {
    text: '2019 Study: Inspiratory muscle training reduced apnea events per hour',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31115739/',
  },
  {
    text: 'Oropharyngeal exercises significantly reduce snoring and the severity of moderate OSA',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19234106',
  },
  {
    text: '2023 study: Myofunctional therapy with myofascial release reduces OSA severity.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37010143',
  },
  {
    text: '2015 review: Myofunctional therapy decreases apnea-hypopnea index by 50% in adults and 62% in children',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25348130/',
  },
  {
    text: 'Myofunctional exercises prevents orthodontic relapse',
    link: 'https://pubmed.ncbi.nlm.nih.gov/20451779/',
  },
  {
    text: 'OMT is effective for the treatment of adults in reducing the severity of OSA and snoring, and improving the quality of life',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6132228/',
  },
];
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

const ClinicalEvidenceScreen = () => {
  const _renderItem: ListRenderItem<TClinicalEvidence> = ({item}) => {
    return <ClinicalEvidenceItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <AppHeader title="Clinical Evidence" />
      <View style={styles.container}>
        <FlatList
          data={CLINICAL_EVIDENCE}
          contentContainerStyle={styles.flatlistContentContainer}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default ClinicalEvidenceScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  flatlistContentContainer: {
    gap: sizeScale(16),
  },
  container: {
    paddingHorizontal: sizeScale(16),
    backgroundColor: COLORS.surface,
    paddingTop: sizeScale(34),
    paddingBottom: sizeScale(25),
  },
  evidenceItemContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(16),
    flexDirection: 'row',
    borderRadius: sizeScale(16),
    paddingVertical: sizeScale(16),
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
