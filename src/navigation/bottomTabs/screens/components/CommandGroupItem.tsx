import COLORS from '@assets/color';
import {Button} from '@rneui/base';
import {ListItem} from '@rneui/themed';
import {AgentBridge} from '@services/signalR';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommandActionButton from './CommandActionButton';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import LottieView from 'lottie-react-native';

interface ICommandGroupItemProps {
  id: string;
}

const CommandGroupItem = ({id}: ICommandGroupItemProps) => {
  const navigation = useAppNavigation();
  const commandGroup = useAppSelector(
    state => state.command.commandGroupEntities[id],
  );

  const isRunning = commandGroup.status === 'processing';

  const handleActionButtonPress = () => {
    // console.log('handleActionButtonPress', agent, id);
    const agentBridge = new AgentBridge({requestId: id});
    // const agent = agentBridgeMap.get(id);

    const commandText =
      commandGroup.commandText?.replace(/[A-Z, a-z]/g, '') ?? '';

    const payload = {
      id,
      agentName: commandGroup.agentName ?? '',
      siteCode: commandGroup.siteCode ?? '',
      commandText: commandText,
      command: commandGroup.command ?? '',
    };

    agentBridge?.runCommand(payload);
  };

  const isRunableCommand = !!commandGroup.agentName;

  const _handleNavigateToExerciseDetail = () => {
    navigation.navigate('ExerciseDetailScreen', {id});
  };

  return (
    <ListItem.Swipeable
      containerStyle={styles.root}
      onPress={isRunableCommand ? _handleNavigateToExerciseDetail : undefined}>
      <View style={styles.container}>
        <Text style={styles.title}>{commandGroup?.name}</Text>

        <View style={styles.rightContainer}>
          {isRunableCommand && (
            <CommandActionButton
              status={commandGroup?.status}
              onPress={handleActionButtonPress}
            />
          )}
        </View>
      </View>
    </ListItem.Swipeable>
  );
};

export default CommandGroupItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: COLORS.surface,
    alignItems: 'flex-start',
    // borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: sizeScale(18),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: sizeScale(16),
  },
  content: {
    flex: 1,
    gap: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: sizeScale(10),
    position: 'absolute',
    right: sizeScale(16),
  },
  title: {
    fontSize: sizeScale(16),
    fontWeight: 'bold',
    color: COLORS.onSurface,
  },
});
