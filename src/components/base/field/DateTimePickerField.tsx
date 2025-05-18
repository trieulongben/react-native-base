// import DateTimePickerModal, {
//   ReactNativeModalDateTimePickerProps,
// } from 'react-native-modal-datetime-picker';

// import React, {useCallback, useState} from 'react';

// import {Pressable} from 'react-native';

// import {Commons} from '@utils/commons';

// import Text from '../Text/Text';
// import SpecialFieldContainer from './SpecialFieldContainer';

// const {dateFormat} = Commons.dateTime;

// type TDateTimePickerFieldProps = {
//   dateValue?: string;
//   onChangeDate?: (date: string) => void;
//   placeholder?: string;
//   errorMessage?: string;
// } & Omit<ReactNativeModalDateTimePickerProps, 'onConfirm' | 'onCancel'>;
// const DateTimePickerField = ({
//   dateValue,
//   onChangeDate,
//   placeholder = 'Choose a date',
//   errorMessage,
//   mode = 'date',
//   ...props
// }: TDateTimePickerFieldProps) => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const date = dateValue ? dateFormat(dateValue, 'DD/MM/YYYY') : placeholder;
//   const showDatePicker = useCallback(() => {
//     setDatePickerVisibility(true);
//   }, [setDatePickerVisibility]);

//   const hideDatePicker = useCallback(() => {
//     setDatePickerVisibility(false);
//   }, [setDatePickerVisibility]);

//   const handleConfirm = useCallback(
//     (value: Date) => {
//       onChangeDate?.(value.toISOString());
//       hideDatePicker();
//     },
//     [onChangeDate, hideDatePicker],
//   );

//   return (
//     <SpecialFieldContainer errorMessage={errorMessage}>
//       <Pressable onPress={showDatePicker}>
//         <Text
//           size="24"
//           weight="light"
//           color={dateValue ? 'ELEMENT_BASE' : 'ELEMENT_BASE_3'}>
//           {date}
//         </Text>
//       </Pressable>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode={mode}
//         {...props}
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//     </SpecialFieldContainer>
//   );
// };
// export default DateTimePickerField;
