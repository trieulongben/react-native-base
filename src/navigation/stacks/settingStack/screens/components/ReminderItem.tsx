import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import Switch from '@components/base/switch/Switch';
import {
  EReminderKey,
  TReminderEnableKey,
  TReminderTimeKey,
} from '@hooks/reminder/useReminder';
import {convertDateToTimeString} from '@utils/date-time';
import {sizeScale} from '@utils/dimension';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TimePicker, {ITimePickerRef} from './TimePicker';

interface IRemindItemProps {
  storageKey: EReminderKey;
  title: string;
  time: Date;
  initialState: boolean;
  onToggle: (state: boolean, key: TReminderEnableKey) => void;
  onSelectTime: (date: Date, key: TReminderTimeKey) => void;
}

export const RemindItem = ({
  storageKey,
  title,
  time,
  initialState = false,
  onToggle,
  onSelectTime,
}: IRemindItemProps) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState, storageKey]);

  const [date, setDate] = useState<Date>(time);
  const [isOpen, setIsOpen] = useState(false);

  const timePickerRef = useRef<ITimePickerRef>(null);
  const layoutRef = useRef<LayoutChangeEvent | null>(null);

  const timeString = useMemo(() => {
    return convertDateToTimeString(date);
  }, [date]);

  const _handleSwitch = (state: boolean) => {
    onToggle(state, storageKey);
    setIsActive(state);
  };

  const _handleSelectTime = () => {
    _handleOpenTimePicker();
  };

  const _handleSnap = useCallback(
    (dateValue: Date) => {
      setDate(dateValue);
      const timeKey =
        storageKey === EReminderKey.MORNING
          ? 'morningReminderTime'
          : 'nightReminderTime';

      onSelectTime(dateValue, timeKey);
    },
    [storageKey, onSelectTime],
  );

  const _handleOpenTimePicker = () => {
    setIsOpen(true);

    const layout = layoutRef.current?.nativeEvent.layout;
    const bottom = (layout?.y ?? 0) + (layout?.height ?? 0);

    timePickerRef.current?.open(0, bottom);
  };

  const _onDismiss = () => {
    setIsOpen(false);
  };

  const _handleLayout = (event: LayoutChangeEvent) => {
    layoutRef.current = {...event};
  };

  const timeTextStyle = StyleSheet.compose(styles.remindTimeText, {
    color: isOpen ? COLORS.primary : COLORS.onSurface,
    fontWeight: isOpen ? '800' : '400',
    width: sizeScale(75),
    textAlign: 'center',
  });

  const timeTextContainerStyle = StyleSheet.compose(
    styles.remindItemContentRight,
    {
      backgroundColor: isOpen ? COLORS.background : COLORS.card,
      justifyContent: 'center',
    },
  );

  return (
    <>
      <View style={styles.remindItemContainer} onLayout={_handleLayout}>
        <View style={styles.remindItemTitleRow}>
          <Text style={styles.remindItemTitle}>{title}</Text>
          <Switch
            initialState={isActive}
            size="51"
            handleOnPress={_handleSwitch}
          />
        </View>
        <View style={styles.remindItemContentRow}>
          <View style={styles.remindItemContentLeft}>
            <SvgIcon name="reminderIcon" size={sizeScale(26)} fill="surface" />
            <Text style={styles.remindItemContentText}>{title}</Text>
          </View>
          <TouchableOpacity
            onPress={_handleSelectTime}
            style={timeTextContainerStyle}>
            <Text style={timeTextStyle}>{timeString}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TimePicker
        ref={timePickerRef}
        onSelect={_handleSelectTime}
        selectedTime={date}
        onDismiss={_onDismiss}
        onSnap={_handleSnap}
      />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  remindItemContainer: {
    gap: sizeScale(10),
  },
  spacer: {backgroundColor: COLORS.surface, height: sizeScale(27.29)},
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(16),
  },
  remindItemTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remindItemTitle: {
    fontSize: sizeScale(25.62),
    color: COLORS.outlineDark,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    lineHeight: sizeScale(36.6),
  },
  remindItemContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(12),
    backgroundColor: COLORS.card,
    padding: sizeScale(16),
    borderRadius: sizeScale(16),
    justifyContent: 'space-between',
    shadowColor: COLORS.onSurface,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 4,
  },
  remindItemContentText: {
    fontSize: sizeScale(16),
    color: COLORS.onSurface,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: sizeScale(24),
  },
  remindItemContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeScale(12),
  },
  remindItemContentRight: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: sizeScale(16),
    paddingHorizontal: sizeScale(5),
    paddingVertical: sizeScale(8),
  },
  remindTimeText: {
    fontSize: sizeScale(16),
    color: COLORS.onSurface,
    fontFamily: 'Inter-Medium',
    lineHeight: sizeScale(23),
    fontWeight: '500',
  },
  datePickerContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
