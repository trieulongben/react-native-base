import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {TIconName} from '@components/base/svg_icon/types';
import ProgressBar from '@components/ui/progress_bar/ProgressBar';
import {EDay} from '@constants/exercise/program';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IExerciseItemProps {
  title: string;
  iconName: TIconName;
  numberOfSets: number;
  numberOfReps: number;
  currentSet: number;
  isDoneToday: boolean;
  day: EDay;
  id: number;
}

interface IBadgeProps {
  title: string;
}

const Badge = ({title}: IBadgeProps) => {
  const valueText = title.split(' ')[0];
  const unitText = title.split(' ')[1];
  return (
    <View style={styles.badge}>
      <Text style={styles.unitText}>
        <Text style={styles.valueText}>{valueText}</Text>
        {' ' + unitText}
      </Text>
    </View>
  );
};

export const ExerciseItem = ({
  title,
  iconName,
  numberOfSets = 15,
  numberOfReps = 0,
  currentSet = 2,
  isDoneToday,
  day,
  id,
}: IExerciseItemProps) => {
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate('ExerciseDetailScreen', {
      day,
      exerciseId: id,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.contentRow}>
        <View style={styles.iconContainer}>
          <SvgIcon name={iconName} size={sizeScale(36)} fill="surfaceDark" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.badgeContainer}>
            <Badge title={`${numberOfSets} sets`} />
            <Badge title={`${numberOfReps} reps`} />
          </View>
        </View>
        <View style={styles.endBlockContainer}>
          <View style={styles.textColumn}>
            <Text
              style={
                styles.progressText
              }>{`${currentSet}/${numberOfSets}`}</Text>
            <Text style={styles.unitText}>sets</Text>
          </View>
          <SvgIcon
            name="chevronRightIcon"
            size={sizeScale(17)}
            fill="surface"
          />
        </View>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar
          progress={currentSet / numberOfSets}
          height={sizeScale(6)}
          style={{backgroundColor: COLORS.surfaceDark}}
          progressColor={isDoneToday ? COLORS.success : COLORS.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    flexDirection: 'column',
    borderRadius: 12,
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(12),
    paddingBottom: undefined,
    overflow: 'hidden',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(16),
  },
  iconContainer: {
    backgroundColor: COLORS.surfaceDark,
    borderRadius: 12,
    padding: sizeScale(14),
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
  },
  titleContainer: {
    height: '100%',
    flex: 1,
  },
  textColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  endBlockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(3.5),
    justifyContent: 'flex-end',
  },
  progressText: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  unitText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 16.5,
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
  },
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  badge: {
    backgroundColor: COLORS.surfaceDark,
    borderRadius: 1000,
    paddingHorizontal: sizeScale(8),
    paddingVertical: sizeScale(4),
  },

  valueText: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 16.5,
    fontFamily: 'Inter',
    color: COLORS.onSurfaceDark,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: sizeScale(8),
    flexWrap: 'wrap',
  },
});
