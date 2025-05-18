import SvgIcon from '@components/base/svg_icon/SvgIcon';
import flattenedMenu from '@constants/menu/menu';
import {sizeScale} from '@utils/dimension';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CommandEntity} from 'src/domain/entities/CommandEntity';
interface CommandTreeProps {
  data: string[];
  renderNode: (node: string) => JSX.Element;
}

const RecursiveNode = ({
  nodeId,
  level,
  renderNode,
  item,
  renderTree,
}: {
  nodeId: string;
  level: number;
  renderNode: (nodeId: string) => JSX.Element;
  item: CommandEntity;
  renderTree: (nodeIds: string[], level: number) => JSX.Element[];
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const _handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View key={nodeId} style={{marginLeft: level * 20, gap: 5}}>
      <TouchableOpacity onPress={_handleToggleExpanded}>
        {renderNode(nodeId)}
        <View style={styles.caretContainer}>
          {item.childIds.length > 0 && (
            <SvgIcon
              name={isExpanded ? 'caretUpIcon' : 'caretDownIcon'}
              size={24}
              fill="onSurface"
            />
          )}
        </View>
      </TouchableOpacity>
      {isExpanded && item.childIds && renderTree(item.childIds, level + 1)}
    </View>
  );
};

const CommandTree: React.FC<CommandTreeProps> = ({data, renderNode}) => {
  const renderTree = (nodeIds: string[], level: number = 0): JSX.Element[] => {
    // if (level > 3) {
    //   return [];
    // } // Limit to 4 levels deep

    return nodeIds.map(nodeId => {
      const item = flattenedMenu.flattenedMenu[nodeId];
      return (
        <RecursiveNode
          key={nodeId}
          nodeId={nodeId}
          level={level}
          renderNode={renderNode}
          item={item}
          renderTree={renderTree}
        />
      );
    });
  };

  return <View>{renderTree(data)}</View>;
};

export default CommandTree;

const styles = StyleSheet.create({
  caretContainer: {
    position: 'absolute',
    right: sizeScale(16),
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
