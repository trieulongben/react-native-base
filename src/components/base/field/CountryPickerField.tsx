// import useAppBottomSheet from '@hooks/app/useAppBottomSheet';
// import {useTestList} from '@services/query/investQuery';
// import {TCountry} from '@type/app/commons';

// import React, {useCallback} from 'react';

// import {Pressable, StyleSheet, View} from 'react-native';

// import {sizeScale} from '@utils/dimension';

// import {COLORS} from '@assets/color';

// import BottomSheet from '../BottomSheet/BottomSheet';
// import {List} from '../List';
// import Show from '../Show/Show';
// import Text from '../Text/Text';
// import SpecialFieldContainer from './SpecialFieldContainer';
// import {Field} from './index';

// interface ICountryPickerFieldProps {
//   onCountryChange?: (country: TCountry) => void;
//   countryValue?: TCountry;
//   errorMessage?: string;
//   placeholder?: string;
// }
// const CountryPickerField = ({
//   onCountryChange,
//   errorMessage,
//   placeholder = 'Tap here to choose',
//   countryValue,
// }: ICountryPickerFieldProps) => {
//   const {ref, close: _handleCloseBottomSheet, open} = useAppBottomSheet();
//   const _handleSelectCountry = useCallback(
//     (value: TCountry) => {
//       onCountryChange?.(value);
//       _handleCloseBottomSheet();
//     },
//     [_handleCloseBottomSheet, onCountryChange],
//   );

//   const name = countryValue?.name;
//   return (
//     <>
//       <SpecialFieldContainer errorMessage={errorMessage}>
//         <Pressable style={styles.container} onPress={open}>
//           <Show>
//             <Show.When isTrue={!!name}>
//               <Text>{name}</Text>
//             </Show.When>
//             <Show.Else>
//               <Text size="24" weight="light" color="ELEMENT_BASE_3">
//                 {placeholder}
//               </Text>
//             </Show.Else>
//           </Show>
//         </Pressable>
//       </SpecialFieldContainer>

//       <BottomSheet ref={ref}>
//         <View style={{height: sizeScale(522)}}>
//           <BottomSheetHeader onClose={_handleCloseBottomSheet} />
//           <CountryListWithSearch onSelected={_handleSelectCountry} />
//         </View>
//       </BottomSheet>
//     </>
//   );
// };
// export default CountryPickerField;
// const styles = StyleSheet.create({
//   countryListWithSearchContainer: {
//     gap: sizeScale(16),
//     paddingHorizontal: sizeScale(16),
//     paddingTop: sizeScale(16),
//     paddingBottom: sizeScale(32),
//     flex: 1,
//   },
//   flashListContentContainer: {
//     paddingHorizontal: sizeScale(4),
//   },
//   countryItemContainer: {
//     height: sizeScale(36),
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: sizeScale(8),
//   },
//   bottomSheetHeader: {
//     height: sizeScale(48),
//     justifyContent: 'center',
//     paddingHorizontal: sizeScale(16),
//     alignItems: 'flex-end',
//     borderBottomWidth: 1,
//     borderBottomColor: COLORS.BORDER_NEUTRAL_2,
//   },
//   container: {
//     height: sizeScale(80),
//     justifyContent: 'center',
//   },
// });

// type TBottomSheetHeaderProps = {
//   onClose: () => void;
// };

// const BottomSheetHeader = ({onClose}: TBottomSheetHeaderProps) => {
//   return (
//     <View style={styles.bottomSheetHeader}>
//       <Pressable onPress={onClose}>
//         <Text size="16" weight="medium" color="ELEMENT_ACCENT">
//           Close
//         </Text>
//       </Pressable>
//     </View>
//   );
// };

// type TCountryListWithSearchProps = {
//   onSelected: (item: TCountry) => void;
// };
// const CountryListWithSearch = ({onSelected}: TCountryListWithSearchProps) => {
//   const query = useTestList();

//   const _renderItem = useCallback(
//     ({item}: {item: any}) => {
//       return <CountryItem item={item} onSelected={onSelected} />;
//     },
//     [onSelected],
//   );

//   return (
//     <View style={styles.countryListWithSearchContainer}>
//       <Field.Search onChangeText={() => console.log('search value')} />
//       <List.FlashListWithQuery
//         query={query}
//         estimatedItemSize={36}
//         renderItem={_renderItem}
//         contentContainerStyle={styles.flashListContentContainer}
//       />
//     </View>
//   );
// };

// type TCountryItemProps = {
//   onSelected: (item: TCountry) => void;
//   item: TCountry;
// };

// const CountryItem = ({onSelected, item}: TCountryItemProps) => {
//   const _handleSelectCountry = useCallback(() => {
//     onSelected(item);
//   }, [item, onSelected]);

//   return (
//     <Pressable
//       style={styles.countryItemContainer}
//       onPress={_handleSelectCountry}>
//       <Text size="14" weight="light" color="ELEMENT_BASE">
//         🇻🇳 Country name
//       </Text>
//     </Pressable>
//   );
// };
