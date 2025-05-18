import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {UserEntity} from '../../domain/entities/UserEntity';

const SLICE_NAME = 'app';

const persistConfig = {
  key: SLICE_NAME,
  storage: AsyncStorage,
};

export interface AppState {
  user: UserEntity;
}

const initialState: AppState = {
  user: {
    email: '',
    name: '',
    refreshToken: '',
    accessToken: '',
  },
};

const appSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserEntity>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = appSlice.actions;

export default persistReducer(persistConfig, appSlice.reducer);
