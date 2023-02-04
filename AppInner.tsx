import SignIn from './src/pages/SignIn';
import Notice from './src/pages/Notice';
import Main from './src/pages/Main';
import NoticeDetail from './src/pages/NoticeDetail';
import Group from './src/pages/Group';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

export type RootStackParamList<T = Array<string | number>> = {
  SignIn: undefined;
  Main: {goal: string};
  Notice: undefined;
  Group: undefined;
  NoticeDetail: {
    idx: number;
  };
};

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  // const isLoggedIn = true;
  return isLoggedIn ? (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notice"
        component={Notice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NoticeDetail"
        component={NoticeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Group"
        component={Group}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppInner;
