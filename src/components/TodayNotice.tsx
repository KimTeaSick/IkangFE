import React, {FC} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const TodayNotice: FC = () => {
  return (
    <View style={styles.notice}>
      <ScrollView>
        <Text>오늘의 공지</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notice: {
    alignItems: 'center',
    padding: '5%',
  },
});

export default TodayNotice;
