import COLORS from '@assets/color';
import {IMAGES} from '@assets/images';
import {Button} from '@components/base/button';
import CheckBox from '@components/base/check_box/CheckBox';
import {Image} from '@components/base/image';
import {useAppSelector} from '@stores/hooks';
import {commandSelectors} from '@stores/slices/commandSlice';
import {sizeScale} from '@utils/dimension';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommandStatus from '../../components/CommandStatus';

interface IRunningCommandItemProps {
  id: string;
  onPress: () => void;
}

const RunningCommandItem = ({id, onPress}: IRunningCommandItemProps) => {
  const commandItem = useAppSelector(
    state => state.command.commandGroupEntities[id],
  );

  const state = commandItem.status;

  const [isChecked, setIsChecked] = useState(false);

  const _handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const _handleLearnMore = () => {
    onPress?.();
  };

  // const checkBoxTextStyle = StyleSheet.compose(styles.checkboxText, {
  //   color: isChecked ? COLORS.primary : COLORS.checkboxText,
  // });

  // const checkBoxText = isChecked ? 'Done' : 'Done today?';

  return (
    <TouchableOpacity
      onPress={_handleLearnMore}
      style={[styles.container, styles.containerWrapper]}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{commandItem.name}</Text>
          <Text>{state}</Text>
        </View>
        <View>
          <CommandStatus status={state} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RunningCommandItem;

const styles = StyleSheet.create({
  containerWrapper: {
    paddingBottom: 4,
    backgroundColor: COLORS.surfaceDark,
    padding: 0,
  },
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: sizeScale(16),
    padding: sizeScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    borderRadius: sizeScale(16),
    flexDirection: 'row',
    gap: sizeScale(8),
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: sizeScale(8),
  },
  image: {
    width: sizeScale(69),
    height: sizeScale(69),
    borderRadius: 8,
  },
  imageContainer: {
    width: sizeScale(69),
    height: sizeScale(69),
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: sizeScale(14),
    lineHeight: sizeScale(18),
    color: COLORS.onSurface,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: sizeScale(10),
    lineHeight: sizeScale(12),
    color: COLORS.outlineDark,
  },
  checkboxText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.checkboxText,
  },
});
