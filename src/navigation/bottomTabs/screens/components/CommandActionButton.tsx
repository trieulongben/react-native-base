import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {sizeScale} from '@utils/dimension';
import LottieView from 'lottie-react-native';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CommandStatus} from 'src/domain/entities/CommandEntity';

interface ICommandActionButtonProps {
  status: CommandStatus;
  onPress: () => void;
}

const CommandActionButton = ({status, onPress}: ICommandActionButtonProps) => {
  const isPending = status === 'pending';
  const isCompleted = status === 'completed';
  const isFailed = status === 'failed';
  const isProcessing = status === 'processing';

  if (isProcessing) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('@assets/lottie/dot_processing.json')}
          autoPlay
          loop
          style={{
            width: sizeScale(100),
            height: sizeScale(100),
            position: 'absolute',
            right: sizeScale(16),
          }}
        />
        <ActivityIndicator size="small" color={COLORS.onSurface} />
        <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
          <SvgIcon name="stopIcon" size={18} fill="onPrimary" />
        </TouchableOpacity>
      </View>
    );
  }

  if (isCompleted) {
    return (
      <View style={styles.container}>
        <SvgIcon name="checkIcon" size={18} fill="success" />
        <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
          <SvgIcon name="playIcon" size={18} fill="onPrimary" />
        </TouchableOpacity>
      </View>
    );
  }

  if (isFailed) {
    return (
      <View style={styles.container}>
        <SvgIcon name="warning_triangle" size={24} fill="error" />
        <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
          <SvgIcon name="playIcon" size={18} fill="onPrimary" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
        <SvgIcon name="playIcon" size={18} fill="onPrimary" />
      </TouchableOpacity>
    </View>
  );
};

export default CommandActionButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: sizeScale(10),
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: COLORS.primary,
    padding: sizeScale(10),
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: COLORS.outline,
  },
});
