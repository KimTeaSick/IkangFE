import React from 'react';
import {View, Text, StyleSheet, Alert, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';
import MainButton from '../components/MainButton';

type MainInScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({navigation}: MainInScreenProps) => {
  const isIos = Platform.OS === 'ios';
  const dispatch = useAppDispatch();

  const goNotice = (goal: string) => {
    navigation.navigate(goal);
  };

  const logout = () => {
    dispatch(
      userSlice.actions.setUser({
        email: '',
        name: '',
        number: '',
        password: '',
        sortation: '',
        userIdx: '',
      }),
    );
  };
  return (
    <View style={styles.container}>
      <Text style={isIos ? styles.iosLogout : styles.logout}>
        <Icon
          name="log-out-outline"
          size={40}
          color="#3f3d56"
          onPress={() =>
            Alert.alert(
              '알림',
              '로그아웃 하시겠습니까?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed!'),
                },
                {text: 'OK', onPress: logout},
              ],
              {cancelable: false},
            )
          }
        />
      </Text>
      <View style={styles.contents}>
        <MainButton
          iconName="megaphone-outline"
          event={() => goNotice('Notice')}
          title="공지사항"
        />
        <MainButton
          iconName="people"
          event={() => goNotice('Group')}
          title="그룹보기"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 40,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  iosLogout: {
    position: 'absolute',
    top: 45,
    right: 15,
  },
});

export default Main;
