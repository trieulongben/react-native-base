import {QueryClient} from '@tanstack/react-query';
import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister';
import {MMKV} from 'react-native-mmkv';

export const queryMMKVStorage = new MMKV();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // 5 phút
      retry: 3,
      gcTime: Infinity,
      retryDelay: attemptIndex =>
        Math.min(attemptIndex > 1 ? 2 ** attemptIndex * 1000 : 1000, 30 * 1000), // Tối đa 30 giây
    },
    mutations: {
      onError: (_err, _variables, recover) =>
        typeof recover === 'function' ? recover() : null,
    },
  },
});

export enum QUERY_KEYS {
  PROGRAM = 'program',
}

const clientStorage = {
  setItem<T>(key: QUERY_KEYS, value: T) {
    queryMMKVStorage.set(key, JSON.stringify(value));
  },
  getItem<T>(key: QUERY_KEYS): T | null {
    const value = queryMMKVStorage.getString(key);
    return value === undefined ? null : JSON.parse(value);
  },
  removeItem: (key: QUERY_KEYS) => {
    queryMMKVStorage.delete(key);
  },
};

export const clientPersister = createSyncStoragePersister({
  storage: clientStorage,
});
