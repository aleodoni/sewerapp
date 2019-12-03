import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      whitelist: ['auth', 'user'],
      storage: AsyncStorage,
    },
    reducers
  );

  return persistedReducer;
};
