import {TIconName} from '@components/base/svg_icon/types';

export enum EExercise {
  MYO_SUCK_IT_UP = 'Myo suck it up',
  MYO_WINDSHIELD_WIPER = 'Myo windshield wiper',
  SUCK_BACK_WITH_THE_SIDES = 'Myo Suck Back with the Sides',
  AIRBAG_HOLD = 'Airbag hold',
  EEH_OOH_AAH = 'EEH OOH AAH',
  TIGER_YELL = 'Tiger yell',
  MYO_PUSH_THE_BACK_UP = 'Myo Push the Back Up',
  MYO_TUG_OF_WAR = 'Myo tug-of-war',
  MYO_TONGUE_WRESTLE = 'Myo Tongue Wrestle',
}

export const EXERCISES: Record<EExercise, TExercise> = {
  [EExercise.MYO_WINDSHIELD_WIPER]: {
    title: 'Myo windshield wiper',
    description: 'Description 1',
    svg: 'swipeIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
      duration: 12,
    },
  },
  [EExercise.MYO_SUCK_IT_UP]: {
    title: 'Myo suck it up',
    description: '',
    svg: 'upIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
    },
  },
  [EExercise.SUCK_BACK_WITH_THE_SIDES]: {
    title: 'Suck Back with the Sides',
    description: '',
    svg: 'arrowOutLinesHorizontalIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
    },
  },
  [EExercise.MYO_PUSH_THE_BACK_UP]: {
    title: 'Myo Push the Back Up',
    description: '',
    svg: 'sortDescendingIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
    },
  },
  [EExercise.MYO_TONGUE_WRESTLE]: {
    title: 'Myo Tongue Wrestle',
    description: '',
    svg: 'waveTriangleIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
    },
  },
  [EExercise.MYO_TUG_OF_WAR]: {
    title: 'Myo tongue tug-of-war',
    description: '',
    svg: 'arrowOutlineVerticalIcon',
    exercise: {
      numberOfSets: 4,
      numberOfReps: 15,
    },
  },
  [EExercise.AIRBAG_HOLD]: {
    title: 'Airbag hold',
    description: '',
    svg: 'airbagHoldIcon',
    exercise: {
      numberOfSets: 0,
      numberOfReps: 0,
      duration: undefined,
    },
  },
  [EExercise.EEH_OOH_AAH]: {
    title: 'EEH OOH AAH',
    description: '',
    svg: 'ehhOohAahIcon',
    exercise: {
      numberOfSets: 0,
      numberOfReps: 0,
      duration: undefined,
    },
  },
  [EExercise.TIGER_YELL]: {
    title: 'Tiger yell',
    description: '',
    svg: 'tigerYellIcon',
    exercise: {
      numberOfSets: 0,
      numberOfReps: 0,
      duration: undefined,
    },
  },
};

type TExercise = {
  title: string;
  description: string;
  svg: TIconName;
  exercise: {
    numberOfSets: number;
    numberOfReps: number;
    duration?: number;
  };
};
