import flattenedMenu from '@constants/menu/menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {CommandEntity, CommandStatus} from 'src/domain/entities/CommandEntity';

const SLICE_NAME = 'commandSlice';

const persistConfig = {
  key: SLICE_NAME,
  storage: AsyncStorage,
};

export interface CommandState {
  connectStatus: 'connecting' | 'connected' | 'disconnected';
  isProcessing: boolean;
  commandQueue: string[];
  processingCommand: string | null;
  commandGroupEntities: Record<string, CommandEntity>;
  commandGroupIds: string[];
}

const initialState: CommandState = {
  connectStatus: 'disconnected',
  isProcessing: false,
  commandQueue: [],
  processingCommand: null,
  commandGroupEntities: flattenedMenu.flattenedMenu,
  commandGroupIds: flattenedMenu.flattenedMenuIds,
};

const commandSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    updateCommandStatus: (
      state: CommandState,
      action: PayloadAction<{id: string; status: CommandStatus}>,
    ) => {
      state.commandGroupEntities[action.payload.id].status =
        action.payload.status;
    },

    updateCommandContent: (
      state: CommandState,
      action: PayloadAction<{id: string; content: string}>,
    ) => {
      const command = state.commandGroupEntities[action.payload.id];

      const newContent = [action.payload.content, ...command?.content];

      state.commandGroupEntities[action.payload.id].content = newContent;
    },
    removeCommand: (state: CommandState, action: PayloadAction<string>) => {
      delete state.commandGroupEntities[action.payload];
    },
    setProcessingCommand: (
      state: CommandState,
      action: PayloadAction<string>,
    ) => {
      state.processingCommand = action.payload;
    },
    setIsProcessing: (state: CommandState, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    setConnectStatus: (
      state: CommandState,
      action: PayloadAction<'connecting' | 'connected' | 'disconnected'>,
    ) => {
      state.connectStatus = action.payload;
    },
    addCommandToQueue: (state: CommandState, action: PayloadAction<string>) => {
      state.commandQueue.push(action.payload);
    },
  },
});

export const {
  removeCommand,
  setProcessingCommand,
  setIsProcessing,
  setConnectStatus,
  updateCommandStatus,
  updateCommandContent,
  addCommandToQueue,
} = commandSlice.actions;

export default persistReducer(persistConfig, commandSlice.reducer);
