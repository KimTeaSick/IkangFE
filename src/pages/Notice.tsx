import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './Notice.styled';
import {RootStackParamList} from '../../AppInner';
import {getNoticeListThunk} from '../lib/noticeApis';
import {RootReducerType} from '../store/rootReducer';
import EntireNotice from '../components/EntireNotice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Notice'>;

const Notice = ({navigation}: SignInScreenProps) => {
  const dispatch = useDispatch();
  const [ios, setIos] = useState(false);
  const {noticeList} = useSelector((state: RootReducerType) => state.notice);

  useEffect(() => {
    Platform.OS === 'ios' && setIos(true);
  }, [noticeList]);

  useEffect(() => {
    dispatch(getNoticeListThunk());
  }, [dispatch]);

  return (
    <View style={ios ? styles.iosContainer : styles.container}>
      <StatusBar hidden={false} />
      <EntireNotice navigation={navigation} noticeList={noticeList} />
    </View>
  );
};

export default Notice;
