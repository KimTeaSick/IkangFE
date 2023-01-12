import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

const Avatar: FC = () => {
  return <View style={styles.avatarCover} />;
};

const styles = StyleSheet.create({
  avatarCover: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: '#3f3d56',
  },
});

export default Avatar;
