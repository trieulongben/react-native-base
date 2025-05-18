import COLORS from '@assets/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH, sizeScale} from '@utils/dimension';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import WheelPicker, {PickerItem} from '@quidone/react-native-wheel-picker';
import {convertToJSDate, extractTimeComponents} from '@utils/date-time';

const ScrollItem = ({
  items,
  selected,
  setSelected,
}: {
  items: PickerItem<string>[];
  selected: string;
  setSelected: (item: string) => void;
}) => {
  return (
    <WheelPicker
      renderItem={({item}) => {
        return (
          <Text
            style={[
              styles.itemText,
              selected === item.value && styles.selectedText,
            ]}>
            {item.label}
          </Text>
        );
      }}
      overlayItemStyle={styles.overlayItem}
      data={items}
      value={selected}
      onValueChanged={({item: {value}}) => setSelected(value)}
    />
  );
};

interface ITimePickerProps {
  onSelect: (time: string) => void;
  onDismiss: () => void;
  onSnap: (date: Date) => void;
  selectedTime: Date;
}

export interface ITimePickerRef {
  open: (right: number, bottom: number) => void;
  close: () => void;
}

const TimePicker = forwardRef<ITimePickerRef, ITimePickerProps>(
  ({onSelect, onDismiss, onSnap, selectedTime}, ref) => {
    const {
      hours: hoursInitial,
      minutes: minutesInitial,
      ampm: ampmInitial,
    } = extractTimeComponents(selectedTime);

    const [selectedHour, setSelectedHour] = useState(hoursInitial);
    const [selectedMinute, setSelectedMinute] = useState(minutesInitial);
    const [selectedPeriod, setSelectedPeriod] = useState(ampmInitial);

    const [isOpen, setIsOpen] = useState(false);

    const [position, setPosition] = useState({
      right: 0,
      bottom: 0,
    });

    useImperativeHandle(ref, () => ({
      open: (right: number, bottom: number) => {
        setIsOpen(true);
        setPosition({right, bottom});
      },
      close: () => {
        setIsOpen(false);
      },
    }));

    const hours: PickerItem<string>[] = Array.from({length: 12}, (_, i) => ({
      value: (i + 1).toString().padStart(2, '0'),
      label: (i + 1).toString().padStart(2, '0'),
    }));
    const minutes: PickerItem<string>[] = Array.from({length: 60}, (_, i) => ({
      value: i.toString().padStart(2, '0'),
      label: i.toString().padStart(2, '0'),
    }));
    const periods: PickerItem<string>[] = [
      {value: 'AM', label: 'AM'},
      {value: 'PM', label: 'PM'},
    ];

    useEffect(() => {
      const dateTimeString = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
      const convertedDateObj = convertToJSDate(dateTimeString);
      onSnap(convertedDateObj);
    }, [selectedMinute, selectedHour, selectedPeriod]);

    const _handleSelect = (time: string) => {
      onSelect(time);
      onSnap(new Date());
    };

    const _handleDismiss = () => {
      setIsOpen(false);
      onDismiss();
    };

    if (!isOpen) {
      return <></>;
    }

    const positionStyle = StyleSheet.compose(styles.pickers, {
      right: position.right,
      top: position.bottom,
    });

    return (
      <View style={styles.modal}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={_handleDismiss}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={positionStyle}>
            <ScrollItem
              items={hours}
              selected={selectedHour}
              setSelected={setSelectedHour}
            />
            <View style={styles.divider} />
            <ScrollItem
              items={minutes}
              selected={selectedMinute}
              setSelected={setSelectedMinute}
            />
            <View style={styles.divider} />

            <ScrollItem
              items={periods}
              selected={selectedPeriod}
              setSelected={setSelectedPeriod}
            />
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 9999,
  },
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalOverlay: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    zIndex: -2,
  },
  pickers: {
    flexDirection: 'row',
    width: sizeScale(292),
    height: sizeScale(232),
    position: 'absolute',
    zIndex: 99,
    backgroundColor: COLORS.background,
    padding: sizeScale(16),
    borderRadius: sizeScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.outlineDark,
    opacity: 0.2,
  },

  itemText: {
    fontSize: 24,
    color: '#000',
    marginVertical: sizeScale(8),
    marginHorizontal: sizeScale(10),
    height: sizeScale(90),
    textAlign: 'center',
  },
  selectedText: {
    fontSize: 32,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  overlayItem: {
    backgroundColor: COLORS.primary,
    opacity: 0.1,
    color: COLORS.primary,
    borderRadius: sizeScale(12),
  },
});

export default React.memo(TimePicker);
