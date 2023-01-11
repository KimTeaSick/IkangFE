import React, {FC} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {NoticeType} from '../slices/notice.d';
import {styles} from './EntireNotice.styled';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Notice'>;

interface EntireNoticeProps {
  noticeList: NoticeType[];
  navigation: any;
}
const EntireNotice: FC<EntireNoticeProps> = ({noticeList, navigation}) => {
  return (
    <View style={styles.notice}>
      <ScrollView>
        {noticeList?.length
          ? noticeList.map((item: NoticeType) => {
              return (
                <TouchableOpacity
                  style={styles.contents}
                  key={item.NOTICE_IDX}
                  onPress={() =>
                    navigation.navigate('NoticeDetail', {
                      idx: item.NOTICE_IDX,
                    })
                  }>
                  <Text style={styles.Title}>{item.TITLE}</Text>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    style={styles.Content}>
                    {item.CONTENT}
                  </Text>
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default EntireNotice;