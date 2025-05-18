import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {CommandStatus as CommandStatusType} from 'src/domain/entities/CommandEntity';

interface ICommandStatusProps {
  status: CommandStatusType;
}

const CommandStatus = ({status = 'completed'}: ICommandStatusProps) => {
  const isPending = status === 'pending';
  const isProcessing = status === 'processing';
  const isCompleted = status === 'completed';
  const isError = status === 'failed';

  if (isPending) {
    return (
      <View style={styles.statusContainer}>
        {/* <ActivityIndicator size="small" color={COLORS.primary} /> */}
      </View>
    );
  }

  if (isProcessing) {
    return (
      <View style={styles.statusContainer}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.statusContainer}>
        <SvgIcon name="warning_triangle" size={24} fill="error" />
      </View>
    );
  }

  return (
    <View style={styles.statusContainer}>
      <SvgIcon name="checkIcon" size={24} fill="success" />
    </View>
  );
};

export default CommandStatus;

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
