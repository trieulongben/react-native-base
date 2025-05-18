import COLORS from '@assets/color';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React, {useRef} from 'react';
import {ScrollView, ScrollViewProps, StyleSheet, Text} from 'react-native';

interface IExerciseDetailBodyProps {
  id: string;
}

const ExerciseDetailBody = ({id}: IExerciseDetailBodyProps) => {
  const command = useAppSelector(
    state => state.command.commandGroupEntities[id],
  );

  const scrollViewRef = useRef<ScrollView>(null);

  const _handleOnContentChange: ScrollViewProps['onContentSizeChange'] = (
    w,
    h,
  ) => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  };

  const _renderContent = (content: string, index: number) => {
    return <Text style={styles.contentText}>{`${index + 1}. ${content}`}</Text>;
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={_handleOnContentChange}>
        {command?.content &&
          command.content.map((item, index) => _renderContent(item, index))}
      </ScrollView>
    </>
  );
};

export default ExerciseDetailBody;

const styles = StyleSheet.create({
  videoContainer: {
    backgroundColor: COLORS.surface,
    aspectRatio: 1.8,
    width: '100%',
    position: 'absolute',
  },
  scrollViewContainer: {
    backgroundColor: COLORS.background,
  },
  instructionLeftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(10),
  },
  sheetContainer: {
    backgroundColor: COLORS.background,
    borderTopLeftRadius: sizeScale(20),
    borderTopRightRadius: sizeScale(20),
    paddingHorizontal: sizeScale(20),
    paddingTop: sizeScale(20),
  },
  videoContainerHolder: {
    aspectRatio: 1.88,
    width: '100%',
  },
  title: {
    fontSize: sizeScale(20),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(10),
    justifyContent: 'space-between',
  },
  instructionContent: {
    flexDirection: 'column',
    gap: sizeScale(8),
    marginTop: sizeScale(8),
    paddingRight: sizeScale(16),
  },
  instructionText: {
    fontSize: sizeScale(18),
    color: COLORS.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
  },
  textRow: {
    flexDirection: 'row',
    gap: sizeScale(10),
  },
  textRowNumber: {
    fontSize: sizeScale(18),
    color: COLORS.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
  },
  textRowText: {
    fontSize: sizeScale(18),
    color: COLORS.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
  },
  tipsContainer: {
    flexDirection: 'column',
    gap: sizeScale(8),
    marginTop: sizeScale(8),
  },
  tipsContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(10),
  },
  tipsText: {
    fontSize: sizeScale(18),
    color: COLORS.onSurfaceVariant,
    fontFamily: 'Inter-Medium',
  },
  scienceContainer: {
    flexDirection: 'column',
    gap: sizeScale(8),
    marginTop: sizeScale(8),
  },
  scienceContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(10),
  },
  contentText: {
    color: COLORS.onBackground,
    fontSize: sizeScale(16),
    fontFamily: 'Inter-Regular',
  },
});
