import COLORS from '@assets/color';
import {EDay} from '@constants/exercise/program';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EHomeScreenState} from '../../uiState';
import {ETabItemState} from '../TabRow';

interface IConnectStatusDotProps {
  status: 'connecting' | 'connected' | 'disconnected';
}

const ConnectStatusDot = ({status}: IConnectStatusDotProps) => {
  if (status === 'connecting') {
    return (
      <View style={styles.connectStatusDotWrapper}>
        <Text style={[styles.connectStatusText, {color: COLORS.warning}]}>
          Connecting
        </Text>
        <View style={styles.connectStatusDot} />
      </View>
    );
  }

  if (status === 'connected') {
    return (
      <View style={styles.connectStatusDotWrapper}>
        <Text style={[styles.connectStatusText, {color: COLORS.success}]}>
          Connected
        </Text>
        <View
          style={[styles.connectStatusDot, {backgroundColor: COLORS.success}]}
        />
      </View>
    );
  }

  if (status === 'disconnected') {
    return (
      <View style={styles.connectStatusDotWrapper}>
        <Text style={[styles.connectStatusText, {color: COLORS.error}]}>
          Disconnected
        </Text>
        <View
          style={[styles.connectStatusDot, {backgroundColor: COLORS.error}]}
        />
      </View>
    );
  }
};

interface IHomeScreenHeaderProps {}
const HomeScreenHeader = ({}: IHomeScreenHeaderProps) => {
  const TITLE = 'GS25 System Agent';

  const connectStatus = useAppSelector(state => state.command.connectStatus);

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{TITLE}</Text>

        <ConnectStatusDot status={connectStatus} />
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
  },
  completedProgram: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  completedProgramText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
  },
  container: {
    gap: sizeScale(16),
    backgroundColor: COLORS.surface,
    paddingVertical: sizeScale(16),
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(5),
  },
  progressBar: {
    flex: 1,
    height: sizeScale(4),
    backgroundColor: COLORS.primary,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    lineHeight: sizeScale(16),
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  attributeBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeScale(16),
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(16),
  },
  textHeader: {
    backgroundColor: COLORS.background,
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    height: '100%',
    padding: sizeScale(16),
  },
  exerciseList: {
    paddingHorizontal: sizeScale(16),
    flex: 1,
  },
  footer: {
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(16),
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: COLORS.disable,
    textAlign: 'center',
  },
  helperTextWrapper: {
    marginTop: sizeScale(26),
  },
  textButton: {
    fontFamily: 'Inter',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary,
    color: COLORS.primary,
    fontWeight: '500',
  },
  connectStatusDot: {
    width: sizeScale(10),
    height: sizeScale(10),
    borderRadius: 1000,
    backgroundColor: COLORS.warning,
  },
  connectStatusText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
  },
  connectStatusDotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizeScale(4),
  },
});
