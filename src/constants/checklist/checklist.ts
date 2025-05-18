import {IMAGES} from '@assets/images';

export type TCheckListExerciseItem = {
  id: ECheckListExercise;
  title: string;
  description: string;
  image: keyof typeof IMAGES;
};

export enum ECheckListExercise {
  SLEEP_ON_YOUR_SIDE = 'SLEEP_ON_YOUR_SIDE',
  ELEVATE_YOUR_HEAD = 'ELEVATE_YOUR_HEAD',
  HUMIDITY_OVER_50 = 'HUMIDITY_OVER_50',
  NASAL_STRIPS_OR_DIALATORS = 'NASAL_STRIPS_OR_DIALATORS',
}

export const CHECK_LIST_EXERCISES: Record<
  ECheckListExercise,
  TCheckListExerciseItem
> = {
  [ECheckListExercise.SLEEP_ON_YOUR_SIDE]: {
    id: ECheckListExercise.SLEEP_ON_YOUR_SIDE,
    title: 'Sleep on your side',
    description:
      'Sleeping on your side reduces the frequency at which the tongue and soft palate collapse into the airway, which is more likely to happen when lying on your back due to the downwards pressure of gravity.',
    image: 'SLEEP_ON_YOUR_SIDE',
  },
  [ECheckListExercise.ELEVATE_YOUR_HEAD]: {
    id: ECheckListExercise.ELEVATE_YOUR_HEAD,
    title: 'Elevate your head & torso',
    description:
      'Inclining the bed decreases pressure on the diaphragm, promoting easier breathing and improving airflow, which helps reduce airway obstructions during sleep.',
    image: 'ELEVATE_YOUR_HEAD',
  },
  [ECheckListExercise.HUMIDITY_OVER_50]: {
    id: ECheckListExercise.HUMIDITY_OVER_50,
    title: 'Bedroom humidity over 50%',
    description:
      'Dry air can cause the throat and nasal tissues to swell or become congested, worsening airway obstructions. Increased humidity helps reduce this irritation and promotes easier breathing.',
    image: 'HUMIDITY_OVER_50',
  },
  [ECheckListExercise.NASAL_STRIPS_OR_DIALATORS]: {
    id: ECheckListExercise.NASAL_STRIPS_OR_DIALATORS,
    title: 'Nasal strips or dialators',
    description:
      'This natural method can help improve airflow through the nasal passages, reducing obstruction in the upper airway.',
    image: 'NASAL_STRIPS_OR_DIALATORS',
  },
};
