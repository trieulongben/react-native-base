import COLORS from '@assets/color';
import LayoutScreen from '@components/base/layout/LayoutScreen';
import {EReminderKey} from '@hooks/reminder/useReminder';
import {sizeScale} from '@utils/dimension';
import {TStorageKey} from '@utils/storage';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from './components';
import {RemindItem} from './components/ReminderItem';
import {useReminderScreen} from '@hooks/reminder/useReminderScreen';

type TReminderEnableKey = Extract<
  TStorageKey,
  'morningReminder' | 'nightReminder'
>;

type TReminderTimeKey = Extract<
  TStorageKey,
  'morningReminderTime' | 'nightReminderTime'
>;

const ReminderScreen = () => {
  const {
    reminders,
    isMorningReminderEnable,
    isNightReminderEnable,
    setReminders,
    checkingPermission,
    morningReminderTime,
    nightReminderTime,
    toggleReminder,
    selectTime,
  } = useReminderScreen();

  const _handleToggleReminder = async (
    state: boolean,
    key: TReminderEnableKey,
  ) => {
    await checkingPermission(true);
    toggleReminder(state, key);
  };

  const _handleSelectTime = (date: Date, key: TReminderTimeKey) => {
    selectTime(date, key);
  };

  return (
    <SafeAreaView style={styles.root} edges={['top']}>
      <LayoutScreen safeAreaColor="surface">
        <AppHeader title="Reminders" />
        <View style={styles.spacer} />
        <ScrollView
          scrollEnabled={false}
          contentContainerStyle={styles.container}>
          <RemindItem
            title="Morning Reminder"
            time={morningReminderTime}
            initialState={isMorningReminderEnable}
            onToggle={_handleToggleReminder}
            onSelectTime={_handleSelectTime}
            storageKey={EReminderKey.MORNING}
          />
          <RemindItem
            title="Evening Reminder"
            time={nightReminderTime}
            initialState={isNightReminderEnable}
            onToggle={_handleToggleReminder}
            onSelectTime={_handleSelectTime}
            storageKey={EReminderKey.NIGHT}
          />
        </ScrollView>
        <SafeAreaView edges={['bottom']} />
      </LayoutScreen>
    </SafeAreaView>
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

export default ReminderScreen;
