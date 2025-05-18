// import {Controller, useFormContext} from 'react-hook-form';

// import React from 'react';

// import {Field} from '../../base';

// interface IFormDateTimePickerProps<T> {
//   name: T;
//   placeholder?: string;
// }
// const FormDateTimePicker = <T extends string>({
//   name,
//   placeholder = 'Type here',
// }: IFormDateTimePickerProps<T>) => {
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
//           <Field.DateTimePicker
//             placeholder={placeholder}
//             errorMessage={errors?.[name]?.message?.toString() || ''}
//             onChangeDate={onChange}
//             dateValue={value}
//           />
//         )}
//       />
//     </>
//   );
// };
// export default FormDateTimePicker;
