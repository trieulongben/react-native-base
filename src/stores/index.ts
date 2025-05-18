import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import appReducer from './slices/appSlice';
import programReducer from './slices/programSlice';
import commandReducer from './slices/commandSlice';
export const store = configureStore({
  reducer: {
    app: appReducer,
    userProgram: programReducer,
    command: commandReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
