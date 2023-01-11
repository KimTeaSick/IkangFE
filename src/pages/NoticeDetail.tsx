import React, {useState, useEffect} from 'react';
import {Text, View, ImageBackground, ScrollView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import {NoticeType} from '../slices/notice.d';
import {useSelector, useDispatch} from 'react-redux';
import {RootReducerType} from '../store/rootReducer';
import {getDetailNoticeThunk} from '../lib/noticeApis';
import {styles} from './NoticeDetail.styled';

type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList<NoticeType>,
  'NoticeDetail'
>;

const NoticeDetail = ({navigation, route}: SignInScreenProps) => {
  const dispatch = useDispatch();
  const {idx} = route.params;
  const {detailNotice} = useSelector((state: RootReducerType) => state.notice);
  const [ios, setIos] = useState(false);
  const goBack = () => navigation.navigate('Notice');

  useEffect(() => {
    dispatch(getDetailNoticeThunk(idx));
    if (Platform.OS === 'ios') {
      setIos(true);
    }
  }, [dispatch, idx]);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../img/detail.png')}
        resizeMode="contain">
        <View style={ios ? styles.iosArrow : styles.arrow}>
          <Icon
            name="chevron-back-outline"
            size={30}
            color="#3f3d56"
            onPress={goBack}
          />
        </View>
      </ImageBackground>
      <View key={idx} style={styles.detail}>
        <Text style={styles.title}>{detailNotice.TITLE}</Text>
        <View style={styles.nameAndRegDate}>
          <Text style={styles.name}>작성자 : {detailNotice.NAME}</Text>
          <Text style={styles.regDate}>
            {detailNotice.REG_DATE?.substring(0, 10)}
          </Text>
        </View>
        <Text style={styles.content}>{detailNotice.CONTENT}</Text>
      </View>
    </ScrollView>
  );
};

export default NoticeDetail;
