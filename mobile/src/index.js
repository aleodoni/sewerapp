import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

// import {store, persistor} from './store';
import App from './App';

export default function Index() {
  return (
    // <Provider store={store}>
    <Provider>
      {/* <PersistGate persistor={persistor}> */}
      <PersistGate>
        <StatusBar barStyle="light-content" backgroundColor="#191620" />
        <App />
      </PersistGate>
    </Provider>
  );
}
