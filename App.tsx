import React from 'react';

import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator';
import {persistor, store} from './src/stores';
import {queryClient, clientPersister} from './src/configs/query-client';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{persister: clientPersister}}>
            <AppNavigator />
            <FlashMessage position="top" />
          </PersistQueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
