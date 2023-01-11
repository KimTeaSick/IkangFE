import React, {useEffect, useState} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Badge from '../components/Badge';
import TodayNotice from '../components/TodayNotice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {getNoticeListThunk} from '../lib/noticeApis';
import {RootReducerType} from '../store/rootReducer';
import {styles} from './Notice.styled';
import EntireNotice from '../components/EntireNotice';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Notice'>;

const Notice = ({navigation}: SignInScreenProps) => {
  const dispatch = useDispatch();
  const [ios, setIos] = useState(false);
  const [period, setPeriod] = useState<'all' | 'today'>('today');
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
      <View style={styles.periodSection}>
        <Badge
          title="today"
          event={() => setPeriod('today')}
          period={period === 'today'}
        />
        <Badge
          title="all"
          event={() => setPeriod('all')}
          period={period === 'all'}
        />
      </View>
      {period === 'today' ? (
        <TodayNotice />
      ) : (
        <EntireNotice navigation={navigation} noticeList={noticeList} />
      )}
    </View>
  );
};

export default Notice;
