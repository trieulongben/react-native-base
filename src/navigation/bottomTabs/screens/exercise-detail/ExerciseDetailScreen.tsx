import LayoutScreen from '@components/base/layout/LayoutScreen';
import {useAppRoute} from '@hooks/app/useAppNavigation';
import React from 'react';
import {ExerciseDetailComponents} from './components';

export enum EExerciseDetailUIState {
  START_SET = 'START_SET',
  IN_PROGRESS = 'IN_PROGRESS',
  SET_COMPLETED = 'SET_COMPLETED',
  EXERCISE_COMPLETED = 'EXERCISE_COMPLETED',
  WORKOUT_COMPLETED = 'WORKOUT_COMPLETED',
}

const ExerciseDetailScreen = () => {
  const {id} = useAppRoute('ExerciseDetailScreen').params;

  return (
    <LayoutScreen safeAreaColor="commandLine">
      <ExerciseDetailComponents.Header id={id} />
      <ExerciseDetailComponents.Body id={id} />
    </LayoutScreen>
  );
};

export default ExerciseDetailScreen;
