import ActionSheet, {
  ActionSheetProps,
  ActionSheetRef,
} from 'react-native-actions-sheet';

import React, {PropsWithChildren, forwardRef} from 'react';

import {sizeScale} from '@utils/dimension';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import COLORS from '@assets/color';

export type TBottomSheetRef = ActionSheetRef;
type TBottomSheetProps = PropsWithChildren<
  {
    gestureEnabled?: boolean;
  } & ActionSheetProps
>;
const BottomSheet = forwardRef<TBottomSheetRef, TBottomSheetProps>(
  ({children, gestureEnabled, ...props}: TBottomSheetProps, ref) => {
    return (
      <ActionSheet
        isModal
        keyboardHandlerEnabled
        ref={ref}
        gestureEnabled={gestureEnabled}
        containerStyle={styles.background}
        CustomHeaderComponent={<BottomSheetHeaderCustom />}
        headerAlwaysVisible
        // ExtraOverlayComponent={isBlurOverlay ? <Backdrop /> : undefined}
        {...props}>
        {children}
        <SafeAreaView />
      </ActionSheet>
    );
  },
);

export default BottomSheet;

const BottomSheetHeaderCustom = () => {
  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.handlerBar} />
    </View>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: sizeScale(13),
  },
  handlerBar: {
    width: sizeScale(40),
    height: sizeScale(3),
    backgroundColor: 'rgba(232,232,232,1)',
  },
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.background,
    borderWidth: sizeScale(1),
    borderBottomWidth: 0,
    borderColor: COLORS.background,
    borderTopLeftRadius: sizeScale(16),
    borderTopRightRadius: sizeScale(16),
  },
});
