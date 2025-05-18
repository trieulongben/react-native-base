import {EDay, IExercise, program} from '@constants/exercise/program';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setStorageData} from '@utils/storage';
import {persistReducer} from 'redux-persist';

const SLICE_NAME = 'program';

const persistConfig = {
  key: SLICE_NAME,
  storage: AsyncStorage,
};

export type TUserProgramList = {
  [day in EDay]: {
    isCompleted: boolean;
    exercises: TUserExerciseDaily[];
  };
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
  unlockedDay: EDay[];
};

const firstdayProgram = program[EDay.DAY_1].exercises.map(exercise => ({
  id: exercise.id,
  isCompleted: false,
  currentSets: 0,
  currentReps: 0,
}));

const initialUserProgram: TUserProgramSlice = {
  programList: {
    [EDay.DAY_1]: {
      isCompleted: false,
      exercises: [...firstdayProgram],
    },
    [EDay.DAY_2]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_3]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_4]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_5]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_6]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_7]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_8]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_9]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_10]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_11]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_12]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_13]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_14]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_15]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_16]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_17]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_18]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_19]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_20]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_21]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_22]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_23]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_24]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_25]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_26]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_27]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_28]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_29]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_30]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_31]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_32]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_33]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_34]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_35]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_36]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_37]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_38]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_39]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_40]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_41]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_42]: {
      isCompleted: false,
      exercises: [],
    },
    [EDay.DAY_43]: {
      isCompleted: false,
      exercises: [],
    },
  },
  lastestDay: EDay.DAY_1,
  unlockedDay: [EDay.DAY_1],
};

const programSlice = createSlice({
  name: SLICE_NAME,
  initialState: initialUserProgram,
  reducers: {
    setDayStatus: (
      state,
      action: PayloadAction<{day: EDay; isCompleted: boolean}>,
    ) => {
      state.programList[action.payload.day].isCompleted =
        action.payload.isCompleted;
      state.lastestDay = action.payload.day;
    },
    addExercises: (
      state,
      action: PayloadAction<{day: EDay; exercises: TUserExerciseDaily[]}>,
    ) => {
      state.programList[action.payload.day].exercises.push(
        ...action.payload.exercises,
      );
    },
    setExerciseStatus: (
      state,
      action: PayloadAction<{
        day: EDay;
        exerciseId: number;
        isCompleted: boolean;
      }>,
    ) => {
      const exercise = state.programList[action.payload.day].exercises.find(
        item => item.id === action.payload.exerciseId,
      );
      if (exercise) {
        exercise.isCompleted = action.payload.isCompleted;
      }
    },
    setExerciseCurrentSets: (
      state,
      action: PayloadAction<{
        day: EDay;
        exerciseId: number;
        currentSets: number;
      }>,
    ) => {
      const exercise = state.programList[action.payload.day].exercises.find(
        item => item.id === action.payload.exerciseId,
      );
      if (exercise) {
        exercise.currentSets = action.payload.currentSets;
      }
    },
    setExerciseCurrentReps: (
      state,
      action: PayloadAction<{
        day: EDay;
        exerciseId: number;
        currentReps: number;
      }>,
    ) => {
      const exercise = state.programList[action.payload.day].exercises.find(
        item => item.id === action.payload.exerciseId,
      );
      if (exercise) {
        exercise.currentReps = action.payload.currentReps;
      }
    },
    setResetProgram: state => {
      state.lastestDay = initialUserProgram.lastestDay;
      state.programList = initialUserProgram.programList;
      state.unlockedDay = initialUserProgram.unlockedDay;
    },
    setUnlockedDay: (state, action: PayloadAction<EDay>) => {
      if (!state.unlockedDay.includes(action.payload)) {
        state.unlockedDay = [...state.unlockedDay, action.payload];
      }
    },
    setLastestDay: (state, action: PayloadAction<EDay>) => {
      state.lastestDay = action.payload;
    },
  },
});

export const {
  setDayStatus,
  setExerciseStatus,
  setExerciseCurrentSets,
  setExerciseCurrentReps,
  setResetProgram,
  addExercises,
  setUnlockedDay,
  setLastestDay,
} = programSlice.actions;

export default persistReducer(persistConfig, programSlice.reducer);
