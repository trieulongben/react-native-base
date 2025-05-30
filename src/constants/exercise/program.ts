export enum EProgram {
  WEEK_1 = 'Week 1',
  WEEK_2 = 'Week 2',
  WEEK_3 = 'Week 3',
  WEEK_4 = 'Week 4',
}

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

export enum ETimeOfTheDay {
  ANYTIME = 'anytime',
  NIGHT = 'night',
}

export type TProgram = Record<EDay, IDayProgram>;

export interface IDayProgram {
  day: EDay;
  exercises: IExercise[];
}

export interface IExercise {
  id: number;
  exercise: EExercise;
  reps: number;
  sets: number;
  timeOfTheDay: ETimeOfTheDay;
}

export enum EWeek {
  WEEK_1 = 'Week 1',
  WEEK_2 = 'Week 2',
  WEEK_3 = 'Week 3',
  WEEK_4 = 'Week 4',
  WEEK_5 = 'Week 5',
  WEEK_6 = 'Week 6',
  CORE_EXERCISES = 'Core Exercises',
}

export enum EDay {
  DAY_1 = 'Day 1',
  DAY_2 = 'Day 2',
  DAY_3 = 'Day 3',
  DAY_4 = 'Day 4',
  DAY_5 = 'Day 5',
  DAY_6 = 'Day 6',
  DAY_7 = 'Day 7',
  DAY_8 = 'Day 8',
  DAY_9 = 'Day 9',
  DAY_10 = 'Day 10',
  DAY_11 = 'Day 11',
  DAY_12 = 'Day 12',
  DAY_13 = 'Day 13',
  DAY_14 = 'Day 14',
  DAY_15 = 'Day 15',
  DAY_16 = 'Day 16',
  DAY_17 = 'Day 17',
  DAY_18 = 'Day 18',
  DAY_19 = 'Day 19',
  DAY_20 = 'Day 20',
  DAY_21 = 'Day 21',
  DAY_22 = 'Day 22',
  DAY_23 = 'Day 23',
  DAY_24 = 'Day 24',
  DAY_25 = 'Day 25',
  DAY_26 = 'Day 26',
  DAY_27 = 'Day 27',
  DAY_28 = 'Day 28',
  DAY_29 = 'Day 29',
  DAY_30 = 'Day 30',
  DAY_31 = 'Day 31',
  DAY_32 = 'Day 32',
  DAY_33 = 'Day 33',
  DAY_34 = 'Day 34',
  DAY_35 = 'Day 35',
  DAY_36 = 'Day 36',
  DAY_37 = 'Day 37',
  DAY_38 = 'Day 38',
  DAY_39 = 'Day 39',
  DAY_40 = 'Day 40',
  DAY_41 = 'Day 41',
  DAY_42 = 'Day 42',
  DAY_43 = 'Day 43',
}

export const EDayToIndex: Record<EDay, number> = {
  [EDay.DAY_1]: 1,
  [EDay.DAY_2]: 2,
  [EDay.DAY_3]: 3,
  [EDay.DAY_4]: 4,
  [EDay.DAY_5]: 5,
  [EDay.DAY_6]: 6,
  [EDay.DAY_7]: 7,
  [EDay.DAY_8]: 8,
  [EDay.DAY_9]: 9,
  [EDay.DAY_10]: 10,
  [EDay.DAY_11]: 11,
  [EDay.DAY_12]: 12,
  [EDay.DAY_13]: 13,
  [EDay.DAY_14]: 14,
  [EDay.DAY_15]: 15,
  [EDay.DAY_16]: 16,
  [EDay.DAY_17]: 17,
  [EDay.DAY_18]: 18,
  [EDay.DAY_19]: 19,
  [EDay.DAY_20]: 20,
  [EDay.DAY_21]: 21,
  [EDay.DAY_22]: 22,
  [EDay.DAY_23]: 23,
  [EDay.DAY_24]: 24,
  [EDay.DAY_25]: 25,
  [EDay.DAY_26]: 26,
  [EDay.DAY_27]: 27,
  [EDay.DAY_28]: 28,
  [EDay.DAY_29]: 29,
  [EDay.DAY_30]: 30,
  [EDay.DAY_31]: 31,
  [EDay.DAY_32]: 32,
  [EDay.DAY_33]: 33,
  [EDay.DAY_34]: 34,
  [EDay.DAY_35]: 35,
  [EDay.DAY_36]: 36,
  [EDay.DAY_37]: 36,
  [EDay.DAY_38]: 37,
  [EDay.DAY_39]: 38,
  [EDay.DAY_40]: 39,
  [EDay.DAY_41]: 40,
  [EDay.DAY_42]: 41,
  [EDay.DAY_43]: 42,
};

export const listEDay = Object.values(EDay);

export const program: TProgram = {
  [EDay.DAY_1]: {
    day: EDay.DAY_1,
    exercises: [
      {
        id: 1,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 25.0,
        sets: 3.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 2,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 25.0,
        sets: 3.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 3,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 5.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_2]: {
    day: EDay.DAY_2,
    exercises: [
      {
        id: 4,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 5,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 6,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 5.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_3]: {
    day: EDay.DAY_3,
    exercises: [
      {
        id: 7,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 8,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 9,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_4]: {
    day: EDay.DAY_4,
    exercises: [
      {
        id: 10,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 11,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 12,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_5]: {
    day: EDay.DAY_5,
    exercises: [
      {
        id: 13,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 14,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 15,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 25.0,
        sets: 3.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_6]: {
    day: EDay.DAY_6,
    exercises: [
      {
        id: 16,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 17,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 18,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_7]: {
    day: EDay.DAY_7,
    exercises: [
      {
        id: 19,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 20,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 21,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_8]: {
    day: EDay.DAY_8,
    exercises: [
      {
        id: 22,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 23,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 24,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 25,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_9]: {
    day: EDay.DAY_9,
    exercises: [
      {
        id: 26,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 27,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 28,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 29,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_10]: {
    day: EDay.DAY_10,
    exercises: [
      {
        id: 30,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 31,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 32,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 33,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_11]: {
    day: EDay.DAY_11,
    exercises: [
      {
        id: 34,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 35,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 36,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 37,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_12]: {
    day: EDay.DAY_12,
    exercises: [
      {
        id: 38,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 39,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 40,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 41,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_13]: {
    day: EDay.DAY_13,
    exercises: [
      {
        id: 42,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 43,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 44,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 45,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_14]: {
    day: EDay.DAY_14,
    exercises: [
      {
        id: 46,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 47,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 48,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 49,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_15]: {
    day: EDay.DAY_15,
    exercises: [
      {
        id: 50,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 51,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 52,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 53,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_16]: {
    day: EDay.DAY_16,
    exercises: [
      {
        id: 54,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 55,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 56,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 25.0,
        sets: 4.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 57,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_17]: {
    day: EDay.DAY_17,
    exercises: [
      {
        id: 58,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 59,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 60,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 61,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_18]: {
    day: EDay.DAY_18,
    exercises: [
      {
        id: 62,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 63,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 64,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 65,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_19]: {
    day: EDay.DAY_19,
    exercises: [
      {
        id: 66,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 67,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 68,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 69,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 50.0,
        sets: 2.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_20]: {
    day: EDay.DAY_20,
    exercises: [
      {
        id: 70,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 71,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 72,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 73,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_21]: {
    day: EDay.DAY_21,
    exercises: [
      {
        id: 74,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 75,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 76,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 77,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_22]: {
    day: EDay.DAY_22,
    exercises: [
      {
        id: 78,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 79,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 80,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 81,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_23]: {
    day: EDay.DAY_23,
    exercises: [
      {
        id: 82,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 83,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 84,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 85,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 86,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_24]: {
    day: EDay.DAY_24,
    exercises: [
      {
        id: 87,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 88,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 89,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 90,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 91,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_25]: {
    day: EDay.DAY_25,
    exercises: [
      {
        id: 92,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 93,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 94,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 95,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 96,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_26]: {
    day: EDay.DAY_26,
    exercises: [
      {
        id: 97,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 98,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 99,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 100,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 101,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_27]: {
    day: EDay.DAY_27,
    exercises: [
      {
        id: 102,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 103,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 104,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 105,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 106,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_28]: {
    day: EDay.DAY_28,
    exercises: [
      {
        id: 107,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 108,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 109,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 110,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 111,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_29]: {
    day: EDay.DAY_29,
    exercises: [
      {
        id: 112,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 113,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 114,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 115,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 116,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_30]: {
    day: EDay.DAY_30,
    exercises: [
      {
        id: 117,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 118,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 119,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 120,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 121,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_31]: {
    day: EDay.DAY_31,
    exercises: [
      {
        id: 122,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 123,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 124,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 125,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 126,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_32]: {
    day: EDay.DAY_32,
    exercises: [
      {
        id: 127,
        exercise: EExercise.AIRBAG_HOLD,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 128,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 129,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 130,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 131,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_33]: {
    day: EDay.DAY_33,
    exercises: [
      {
        id: 132,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 133,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 134,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 135,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 136,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_34]: {
    day: EDay.DAY_34,
    exercises: [
      {
        id: 137,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 138,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 139,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 140,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 141,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_35]: {
    day: EDay.DAY_35,
    exercises: [
      {
        id: 142,
        exercise: EExercise.TIGER_YELL,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 143,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 144,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 145,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 146,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_36]: {
    day: EDay.DAY_36,
    exercises: [
      {
        id: 147,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 148,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 149,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_37]: {
    day: EDay.DAY_37,
    exercises: [
      {
        id: 150,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 151,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 152,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 153,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 154,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_38]: {
    day: EDay.DAY_38,
    exercises: [
      {
        id: 155,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 156,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 157,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_39]: {
    day: EDay.DAY_39,
    exercises: [
      {
        id: 158,
        exercise: EExercise.MYO_SUCK_IT_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 159,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 160,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 161,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 162,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_40]: {
    day: EDay.DAY_40,
    exercises: [
      {
        id: 163,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 164,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 165,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_41]: {
    day: EDay.DAY_41,
    exercises: [
      {
        id: 166,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 167,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 168,
        exercise: EExercise.MYO_PUSH_THE_BACK_UP,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 169,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 170,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
  [EDay.DAY_42]: {
    day: EDay.DAY_42,
    exercises: [
      {
        id: 171,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 172,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 173,
        exercise: EExercise.TIGER_YELL,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
    ],
  },
  [EDay.DAY_43]: {
    day: EDay.DAY_43,
    exercises: [
      {
        id: 174,
        exercise: EExercise.MYO_WINDSHIELD_WIPER,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 175,
        exercise: EExercise.SUCK_BACK_WITH_THE_SIDES,
        reps: 100.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 176,
        exercise: EExercise.EEH_OOH_AAH,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.ANYTIME,
      },
      {
        id: 177,
        exercise: EExercise.MYO_TUG_OF_WAR,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
      {
        id: 178,
        exercise: EExercise.MYO_TONGUE_WRESTLE,
        reps: 10.0,
        sets: 1.0,
        timeOfTheDay: ETimeOfTheDay.NIGHT,
      },
    ],
  },
};
