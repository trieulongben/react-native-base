import {EDay, IExercise, listEDay, program} from '@constants/exercise/program';
import {ETabItemState} from '@navigation/bottomTabs/screens/components/TabRow';
import {useAppDispatch, useAppSelector} from '@stores/hooks';
import {
  addExercises,
  setDayStatus,
  setExerciseCurrentReps,
  setExerciseCurrentSets,
  setExerciseStatus,
  setResetProgram,
  setUnlockedDay,
} from '@stores/slices/programSlice';
import {getStorageData, setStorageData} from '@utils/storage';
import {useCallback, useEffect} from 'react';

import dayjs from 'dayjs';

export type TUserProgramList = {
  [day in EDay]: TUserExerciseDaily[];
};

export type TUserExerciseDaily = {
  id: IExercise['id'];
  isCompleted: boolean;
  currentSets: number;
  currentReps: number;
};

export type TUserProgramSlice = {
  programList: TUserProgramList;
  lastestDay: EDay; // lastest day that user has ever completed 1 exercise
  lastestDayIndex: number;
  dayStatus: {
    [day in EDay]: ETabItemState;
  };
};

const useProgram = () => {
  const {programList, unlockedDay} = useAppSelector(state => state.userProgram);
  const dispatch = useAppDispatch();

  const lastestDay = unlockedDay[unlockedDay.length - 1];

  const enableTesting = getStorageData('enableTesting');

  const finishADay = (selectedDayId: EDay) => {
    if (enableTesting) {
      const nextDay = listEDay[listEDay.indexOf(selectedDayId) + 1];
      //Complete selected day
      console.log('finishADay', selectedDayId, nextDay);
      dispatch(setDayStatus({day: selectedDayId, isCompleted: true}));
      dispatch(setUnlockedDay(nextDay));
      return;
    }
  };

  useEffect(() => {
    //Daily check
    const lastLoginTimestamp = getStorageData('lastLoginTimestamp');
    const currentTimestamp = dayjs().unix();
    if (!lastLoginTimestamp) {
      setStorageData('lastLoginTimestamp', currentTimestamp);
    }

    const isNewDay = dayjs(lastLoginTimestamp).isSame(
      dayjs(currentTimestamp),
      'day',
    );
    if (!isNewDay) {
      return;
    }
    // If user logged any exercise in the lastest day, then unlock the next day
    const isPreviousDayLoggedAny = programList[lastestDay].exercises.some(
      it => it.currentReps > 0 || it.currentSets > 0,
    );

    if (isPreviousDayLoggedAny) {
      const nextDay = listEDay[listEDay.indexOf(lastestDay) + 1];
      dispatch(setUnlockedDay(nextDay));
    }
  }, [unlockedDay, dispatch, programList, lastestDay]);

  const checkIsCompletedAllSelectedDayExercise = useCallback(
    (day: EDay) => {
      const isCompletedAllTodayExercise = programList[day].exercises.every(
        it => {
          return it.isCompleted;
        },
      );

      console.log(
        'isCompletedAllTodayExercise',
        day,
        isCompletedAllTodayExercise,
      );

      if (isCompletedAllTodayExercise) {
        dispatch(setDayStatus({day, isCompleted: isCompletedAllTodayExercise}));
        const nextDay = listEDay[listEDay.indexOf(day) + 1];
        dispatch(setUnlockedDay(nextDay));
      }
      return isCompletedAllTodayExercise;
    },
    [programList, dispatch],
  );

  const createTodayUserProgram = (day: EDay) => {
    const todayProgram = program[day];
    const userExercise: TUserExerciseDaily[] = todayProgram.exercises.map(
      exercise => ({
        id: exercise.id,
        isCompleted: false,
        currentSets: 0,
        currentReps: 0,
      }),
    );

    dispatch(addExercises({day, exercises: userExercise}));
    return todayProgram;
  };

  const completeARep = (day: EDay, exerciseId: number) => {
    const exercise = programList[day].exercises.find(
      it => it.id === exerciseId,
    );
    const exerciseInfo = program[day].exercises.find(
      it => it.id === exerciseId,
    );
    const currentReps = exercise?.currentReps ?? 0;
    const newReps = currentReps + 1;

    const maxReps = exerciseInfo?.reps ?? 0;
    console.log('completeARep', day, exerciseId, maxReps, newReps);
    if (maxReps + 1 === newReps) {
      dispatch(setExerciseCurrentReps({day, exerciseId, currentReps: 0}));
      completeASet(day, exerciseId);
      return;
    }
    dispatch(setExerciseCurrentReps({day, exerciseId, currentReps: newReps}));
  };

  const completeASet = (day: EDay, exerciseId: number) => {
    const exercise = programList[day].exercises.find(
      it => it.id === exerciseId,
    );
    const exerciseInfo = program[day].exercises.find(
      it => it.id === exerciseId,
    );
    const currentSets = exercise?.currentSets ?? 0;
    const newSets = currentSets + 1;

    if (newSets === exerciseInfo?.sets) {
      completeExercise(day, exerciseId);
    }

    dispatch(setExerciseCurrentSets({day, exerciseId, currentSets: newSets}));
  };

  const completeExercise = (day: EDay, exerciseId: number) => {
    const isAllExercisesCompleted = programList[day].exercises.every(
      it => it.isCompleted,
    );
    console.log('isAllExercisesCompleted', day, isAllExercisesCompleted);

    if (isAllExercisesCompleted) {
      completeDay(day);
      return;
    }
    dispatch(setExerciseStatus({day, exerciseId, isCompleted: true}));
  };

  const completeDay = (day: EDay) => {
    dispatch(setDayStatus({day, isCompleted: true}));
  };

  const resetProgram = () => {
    dispatch(setResetProgram());
  };

  return {
    programList,
    lastestDay,
    unlockedDay,
    enableTesting,
    createTodayUserProgram,
    resetProgram,
    completeARep,
    completeASet,
    completeExercise,
    completeDay,
    checkIsCompletedAllSelectedDayExercise,
    finishADay,
  };
};

const programHooks = {
  useProgram,
};

export default programHooks;
