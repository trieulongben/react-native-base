// import CountryPickerField from './CountryPickerField';
// import DateTimePickerField from './DateTimePickerField';
import SearchField from './SearchField';
import TextField from './TextField';
import TextFieldMultiline from './TextFieldMultiline';
import TextFieldPassword from './TextFieldPassword';
import TextFieldSpecial from './TextFieldSpecial';

export const Field = {
  Input: TextField,
  Password: TextFieldPassword,
  Special: TextFieldSpecial,
  Search: SearchField,
  Multiline: TextFieldMultiline,
  // CountryPicker: CountryPickerField,
  // DateTimePicker: DateTimePickerField,
};
