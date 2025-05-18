import {EHabitsDetailCardElement} from '../../habits';
import CheckListDetailElementCardLink from './CheckListDetailElementCardLink';
import CheckListDetailElementCardText from './CheckListDetailElementCardText';
import CheckListDetailElementCardTextDark from './CheckListDetailElementCardTextDark';

export const CardElements = {
  [EHabitsDetailCardElement.TEXT]: CheckListDetailElementCardText,
  [EHabitsDetailCardElement.TEXT_DARK]: CheckListDetailElementCardTextDark,
  [EHabitsDetailCardElement.LINK]: CheckListDetailElementCardLink,
  [EHabitsDetailCardElement.IMAGE]: CheckListDetailElementCardText,
};
