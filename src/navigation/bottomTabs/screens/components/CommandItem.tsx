import COLORS from '@assets/color';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommandActionButton from './CommandActionButton';
import {agentBridgeMap} from '@preload/preload';
import {AgentBridge} from '@services/signalR';
interface ICommandItemProps {
  id: string;
}

export const CommandItem = ({id}: ICommandItemProps) => {
  const navigation = useAppNavigation();

  useEffect(() => {
    const agentBridge = new AgentBridge({requestId: id});
    agentBridgeMap.set(id, agentBridge);
  }, [id]);

  const agentBridge = agentBridgeMap.get(id);

  console.log('agentBridgeMap', agentBridgeMap);

  const handleActionButtonPress = () => {
    console.log('handleActionButtonPress', agentBridge);
    agentBridge?.runCommand();
  };

  const command = useAppSelector(
    state => state.command.commandGroupEntities[id],
  );

  const handlePress = () => {
    navigation.navigate('ExerciseDetailScreen', {
      id,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.contentRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{command?.name}</Text>
        </View>
        <View style={styles.endBlockContainer}>
          <CommandActionButton
            status={command?.status}
            onPress={handleActionButtonPress}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surfaceDark,
    flexDirection: 'column',
    paddingHorizontal: sizeScale(16),
    paddingVertical: sizeScale(12),
    paddingBottom: undefined,
    overflow: 'hidden',
    width: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(16),
    width: '100%',
  },
  iconContainer: {
    backgroundColor: COLORS.surfaceDark,
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
    flex: 1,
    justifyContent: 'center',
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
  startButton: {
    backgroundColor: COLORS.surface,
    padding: sizeScale(12),
    borderRadius: 1000,
  },
});
