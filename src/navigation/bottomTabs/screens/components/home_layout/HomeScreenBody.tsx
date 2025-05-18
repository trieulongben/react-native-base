import COLORS from '@assets/color';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CommandGroupItem from '../CommandGroupItem';
import CommandTree from '../CommandTree';

const useHomeScreenBody = () => {
  const commandGroups = useAppSelector(
    state => state.command.commandGroupEntities,
  );
  // const commandGroupIds = useAppSelector(
  //   state => state.command.commandGroupIds,
  // );

  const commandGroupIds = ['1'];

  // const init = () => {
  //   const commandGroups = _convertMenuToCommandGroup(MENU);
  //   const commands = _convertMenuCommandToCommand(MENU);

  //   dispatch(setCommandGroups(commandGroups));
  //   dispatch(setCommands(commands));
  // };

  // useEffect(() => {
  //   init();
  // }, []);

  // console.log('commandGroups', commandGroups);

  return {
    commandGroups,
    commandGroupIds,
  };
};

interface IHomeScreenBodyProps {}

const HomeScreenBody = ({}: IHomeScreenBodyProps) => {
  // const commandGroups = useAppSelector(commandGroupSelectors.selectAll);

  const {commandGroupIds} = useHomeScreenBody();

  // console.log('commandGroups', commandGroups);

  // const _renderCommandGroup: ListRenderItem<CommandEntity> = ({item}) => {
  //   return <CommandGroupItem title={item.name} id={item.id} />;
  // };

  const _renderNode = (node: string) => {
    return <CommandGroupItem id={node} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CommandTree data={commandGroupIds} renderNode={_renderNode} />
      </ScrollView>
    </View>
  );
};

export default HomeScreenBody;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: sizeScale(25),
    paddingBottom: sizeScale(140),
  },
});
