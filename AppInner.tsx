import SignIn from './src/pages/SignIn';
import Notice from './src/pages/Notice';
import Main from './src/pages/Main';
import NoticeDetail from './src/pages/NoticeDetail';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList<T = Array<string | number>> = {
  SignIn: undefined;
  SignUp: Partial<{
    user: string;
  }>;
  SignUpEmail: Partial<{
    sortation?: string;
  }>;
  SignUpPassword: Partial<{
    sortation?: number;
    email?: string;
  }>;
  SignUpPhone: Partial<{
    sortation?: number;
    email?: string;
    password?: string;
  }>;
  SignUpName: Partial<{
    sortation?: number;
    email?: string;
    password?: string;
    number?: string;
  }>;
  Main: undefined;
  Notice: undefined;
  Search: undefined;
  SignUpSelect: undefined;
  AddNotice: undefined;
  NoticeDetail: {
    idx: number;
  };
};

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  // const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  const isLoggedIn = true;
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
