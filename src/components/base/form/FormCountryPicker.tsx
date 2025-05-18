// import {Controller, useFormContext} from 'react-hook-form';

// import React from 'react';

// import {Field} from '../../base';

// interface IFormCountryPickerProps<T> {
//   name: T;
//   placeholder?: string;
// }
// const FormCountryPicker = <T extends string>({
//   name,
//   placeholder = 'Type here',
// }: IFormCountryPickerProps<T>) => {
//   const {
//     formState: {errors},
//     control,
//   } = useFormContext();

//   return (
//     <>
//       <Controller
//         name={name || ''}
//         control={control}
//         render={({field: {onChange, value}}) => (
//           <Field.CountryPicker
//             placeholder={placeholder}
//             errorMessage={errors?.[name]?.message?.toString() || ''}
//             onCountryChange={onChange}
//             countryValue={value}
//           />
//         )}
//       />
//     </>
//   );
// };
// export default FormCountryPicker;
