import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import FCMContainer from './src/components/FCMContainer';
import store from './src/store';
import AppInner from './AppInner';

function App() {
  return (
    <FCMContainer>
      <Provider store={store}>
        <NavigationContainer>
          <AppInner />
        </NavigationContainer>
      </Provider>
    </FCMContainer>
  );
}

export default App;
