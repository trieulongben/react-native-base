import COLORS from '@assets/color';
import SvgIcon from '@components/base/svg_icon/SvgIcon';
import {useAppNavigation} from '@hooks/app/useAppNavigation';
import {AgentBridge} from '@services/signalR';
import {useAppSelector} from '@stores/hooks';
import {sizeScale} from '@utils/dimension';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CommandActionButton from '../../components/CommandActionButton';

interface IExerciseDetailHeaderProps {
  id: string;
}

const ExerciseDetailHeader = ({id}: IExerciseDetailHeaderProps) => {
  const navigation = useAppNavigation();

  const initialFromDate = dayjs().subtract(1, 'day').toDate();
  const initialToDate = dayjs().toDate();

  const [fromDate, setFromDate] = useState<Date>(initialFromDate);
  const [toDate, setToDate] = useState<Date>(initialToDate);
  const [fromDatePickerOpen, setFromDatePickerOpen] = useState(false);
  const [toDatePickerOpen, setToDatePickerOpen] = useState(false);

  const command = useAppSelector(
    state => state.command.commandGroupEntities[id],
  );

  const _handlePressBack = () => {
    navigation.goBack();
  };

  const handlePlayCommand = () => {
    console.log('play command');
    const agent = new AgentBridge({requestId: id});
    const commandText = command.commandText?.replace(/[A-Z, a-z]/g, '') ?? '';

    const payload = {
      id,
      agentName: command.agentName ?? '',
      siteCode: command.siteCode ?? '',
      commandText: commandText,
      command: command.command ?? '',
    };

    agent.runCommand(payload);
  };

  const _handleSelectFromDate = () => {
    console.log('select from date');
    setFromDatePickerOpen(true);
  };

  const _handleSelectToDate = () => {
    console.log('select to date');
    setToDatePickerOpen(true);
  };

  const _handleConfirmFromDate = (date: Date) => {
    setFromDate(date);
    setFromDatePickerOpen(false);
  };

  const _handleConfirmToDate = (date: Date) => {
    setToDate(date);
    setToDatePickerOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TouchableOpacity style={styles.backButton} onPress={_handlePressBack}>
          <SvgIcon name="arrowLeft" size={24} fill="onSurface" />
        </TouchableOpacity>
        <Text style={styles.title}>{command?.name}</Text>
        <CommandActionButton
          status={command.status}
          onPress={handlePlayCommand}
        />
      </View>
      <View style={styles.settingRow}>
        <View style={styles.dateSelectContainer}>
          <TouchableOpacity
            style={styles.dateSelectItem}
            onPress={_handleSelectFromDate}>
            <Text style={styles.dateLabelText}>From</Text>
            <Text style={styles.dateText}>{fromDate.toLocaleDateString()}</Text>
            <DatePicker
              date={fromDate}
              onDateChange={setFromDate}
              mode="date"
              modal
              open={fromDatePickerOpen}
              onCancel={() => setFromDatePickerOpen(false)}
              onConfirm={_handleConfirmFromDate}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dateSelectItem}
            onPress={_handleSelectToDate}>
            <Text style={styles.dateLabelText}>To</Text>
            <Text style={styles.dateText}>{toDate.toLocaleDateString()}</Text>
            <DatePicker
              date={toDate}
              onDateChange={setToDate}
              mode="date"
              modal
              open={toDatePickerOpen}
              onCancel={() => setToDatePickerOpen(false)}
              onConfirm={_handleConfirmToDate}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExerciseDetailHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: COLORS.onSurface,
    width: '60%',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizeScale(16),
    gap: sizeScale(16),
    justifyContent: 'space-between',
  },
  progressBar: {
    paddingHorizontal: sizeScale(16),
    height: sizeScale(10),
    marginBottom: sizeScale(4),
  },
  container: {
    gap: sizeScale(16),
    backgroundColor: COLORS.surface,
    paddingVertical: sizeScale(16),
  },
  backButton: {
    padding: sizeScale(7.2),
    borderRadius: 1000,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceDark,
  },
  skipButton: {
    padding: sizeScale(7.2),
    borderRadius: 1000,
    backgroundColor: COLORS.primary,
  },
  progressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: COLORS.onSurface,
  },
  progressTextLower: {
    color: COLORS.onSurface,
  },
  progressTextContainer: {
    alignItems: 'center',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizeScale(16),
  },
  dateSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: sizeScale(9),
  },
  dateSelectItem: {
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: sizeScale(16),
    gap: sizeScale(4),
    borderWidth: 2,
    borderColor: COLORS.divider,
    // borderRadius: 1000,
    paddingVertical: sizeScale(4),
    borderRadius: 8,
  },
  dateLabelText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: COLORS.onBackground,
    opacity: 0.6,
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: COLORS.onSurface,
  },
});
