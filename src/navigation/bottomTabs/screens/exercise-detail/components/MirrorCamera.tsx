import COLORS from '@assets/color';
import {SvgIcon} from '@components/base';
import {SCREEN_HEIGHT, SCREEN_WIDTH, sizeScale} from '@utils/dimension';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export interface IMirrorCameraRef {
  show: () => void;
}
interface IMirrorCameraProps {}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

const MINI_WIDTH = sizeScale(150);
const MINI_HEIGHT = sizeScale(200);

const fullWidthRatio = SCREEN_WIDTH / MINI_WIDTH;
const fullHeightRatio = SCREEN_HEIGHT / 2 / MINI_HEIGHT;

export const MirrorCamera = forwardRef<IMirrorCameraRef, IMirrorCameraProps>(
  ({}, ref) => {
    const device = useCameraDevice('front');
    const {hasPermission, requestPermission} = useCameraPermission();

    console.log(fullWidthRatio, fullHeightRatio);
    useImperativeHandle(ref, () => ({
      show: _handleShow,
    }));

    const _handleShow = async () => {
      const isPermissionGranted = hasPermission;
      if (!isPermissionGranted) {
        await requestPermission();
      }
      setIsShow(true);
    };

    const [isShow, setIsShow] = useState(false);

    const [isFullScreen, setIsFullScreen] = useState(false);

    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    const prevTranslationY = useSharedValue(0);

    const widthAni = useSharedValue(MINI_WIDTH);
    const heightAni = useSharedValue(MINI_HEIGHT);

    const animatedStyles = useAnimatedStyle(() => ({
      transform: [
        {translateX: translationX.value},
        {translateY: translationY.value},
      ],
      width: widthAni.value,
      height: heightAni.value,
      padding: widthAni.value !== 1 ? 0 : 4,
    }));

    const pan = Gesture.Pan()
      .minDistance(1)
      .onStart(() => {
        if (isFullScreen) {
          return;
        }
        prevTranslationX.value = translationX.value;
        prevTranslationY.value = translationY.value;
      })
      .onUpdate(event => {
        if (isFullScreen) {
          return;
        }

        const maxTranslateX = SCREEN_WIDTH;
        const maxTranslateY = SCREEN_HEIGHT;

        translationX.value = clamp(
          prevTranslationX.value + event.translationX,
          -maxTranslateX,
          maxTranslateX,
        );
        translationY.value = clamp(
          prevTranslationY.value + event.translationY,
          -maxTranslateY,
          maxTranslateY,
        );
      })
      .runOnJS(true);

    const _onClose = () => {
      setIsShow(false);
    };

    const _onToggleFullScreen = () => {
      widthAni.value = withTiming(SCREEN_WIDTH, {
        duration: 300,
      });
      heightAni.value = withTiming(SCREEN_HEIGHT * 0.6, {
        duration: 300,
      });

      translationX.value = withTiming(0, {
        duration: 300,
      });
      translationY.value = withTiming(SCREEN_HEIGHT - SCREEN_HEIGHT * 0.6, {
        duration: 300,
      });
      setIsFullScreen(true);
    };

    const _onCloseFullScreen = () => {
      widthAni.value = withTiming(MINI_WIDTH, {
        duration: 300,
      });
      heightAni.value = withTiming(MINI_HEIGHT, {
        duration: 300,
      });
      setIsFullScreen(false);
    };

    if (!isShow) {
      return null;
    }

    if (device == null) {
      return (
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.container, animatedStyles]}>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={_onClose}>
                <SvgIcon name="closeIcon" size={isFullScreen ? 48 : 24} />
              </TouchableOpacity>
              {isFullScreen ? (
                <TouchableOpacity onPress={_onCloseFullScreen}>
                  <SvgIcon
                    name="screenMinimizeIcon"
                    size={isFullScreen ? 48 : 24}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={_onToggleFullScreen}>
                  <SvgIcon
                    name="screenFullIcon"
                    size={isFullScreen ? 48 : 24}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text>No camera</Text>
          </Animated.View>
        </GestureDetector>
      );
    }

    if (!hasPermission) {
      return (
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.container, animatedStyles]}>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={_onClose}>
                <SvgIcon name="closeIcon" size={isFullScreen ? 48 : 24} />
              </TouchableOpacity>
              {isFullScreen ? (
                <TouchableOpacity onPress={_onCloseFullScreen}>
                  <SvgIcon
                    name="screenMinimizeIcon"
                    size={isFullScreen ? 48 : 24}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={_onToggleFullScreen}>
                  <SvgIcon
                    name="screenFullIcon"
                    size={isFullScreen ? 48 : 24}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text>No permission</Text>
          </Animated.View>
        </GestureDetector>
      );
    }

    return (
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.container, animatedStyles]}>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={_onClose}>
              <SvgIcon name="closeIcon" size={isFullScreen ? 48 : 24} />
            </TouchableOpacity>
            {isFullScreen ? (
              <TouchableOpacity onPress={_onCloseFullScreen}>
                <SvgIcon
                  name="screenMinimizeIcon"
                  size={isFullScreen ? 48 : 24}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={_onToggleFullScreen}>
                <SvgIcon name="screenFullIcon" size={isFullScreen ? 48 : 24} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} device={device} isActive={true} />
          </View>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    zIndex: 99999,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: 'white',
    width: sizeScale(MINI_WIDTH),
    height: sizeScale(MINI_HEIGHT),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    overflow: 'hidden',
    padding: sizeScale(4),
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    zIndex: 99998,
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 99999,
    padding: sizeScale(10),
  },
  cameraContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
