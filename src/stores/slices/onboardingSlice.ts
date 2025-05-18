// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';
// import {UserEntity} from '../../domain/entities/UserEntity';

// const SLICE_NAME = 'onboarding';

// const persistConfig = {
//   key: SLICE_NAME,
//   storage: AsyncStorage,
// };

// export interface OnboardingState {
//   hasVisited: boolean;
//   user: UserEntity;
//   referralCode: string;
// }

// const initialState: OnboardingState = {
//   hasVisited: false,
//   user: {
//     id: '',
//     age: '',
//     gender: '',
//     washFrequency: '',
//     scalpCondition: '',
//     goals: [],
//     familyHistory: '',
//     reason: '',
//     interest: '',
//     createdAt: new Date().toISOString(),
//   },
//   referralCode: '',
// };

// const onboardingSlice = createSlice({
//   name: SLICE_NAME,
//   initialState,
//   reducers: {
//     setHasVisited: state => {
//       state.hasVisited = true;
//     },
//     setAge: (state, action: PayloadAction<string>) => {
//       state.user.age = action.payload;
//     },
//     setReferralCode: (state, action: PayloadAction<string>) => {
//       state.referralCode = action.payload;
//     },
//     setGender: (state, action: PayloadAction<string>) => {
//       state.user.gender = action.payload;
//     },
//     setWashFrequency: (state, action: PayloadAction<string>) => {
//       state.user.washFrequency = action.payload;
//     },
//     setGoals: (state, action: PayloadAction<string[]>) => {
//       state.user.goals = action.payload;
//     },
//     setFamilyHistory: (state, action: PayloadAction<string>) => {
//       state.user.familyHistory = action.payload;
//     },
//     setReason: (state, action: PayloadAction<string>) => {
//       state.user.reason = action.payload;
//     },
//     setInterest: (state, action: PayloadAction<string>) => {
//       state.user.interest = action.payload;
//     },
//     setScalpCondition: (state, action: PayloadAction<string>) => {
//       state.user.scalpCondition = action.payload;
//     },
//   },
// });

// export const {
//   setHasVisited,
//   setAge,
//   setReferralCode,
//   setGender,
//   setWashFrequency,
//   setGoals,
//   setFamilyHistory,
//   setReason,
//   setInterest,
//   setScalpCondition,
// } = onboardingSlice.actions;

// export default persistReducer(persistConfig, onboardingSlice.reducer);
