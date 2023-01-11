import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = (period: boolean) =>
  StyleSheet.create({
    periodButton: {
      width: 50,
      height: 21,
      borderRadius: 15,
      marginRight: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: period ? '#3f3d56' : '#fff',
      backgroundColor: period ? '#3f3d56' : '#fff',
    },
    textStyle: {
      color: period ? '#fff' : '#3f3d56',
      fontSize: 14,
    },
  });

interface BadgeProps {
  title: string;
  event: () => void;
  period: boolean;
}

const Badge: FC<BadgeProps> = ({title, event, period}) => {
  return (
    <TouchableOpacity style={styles(period).periodButton} onPress={event}>
      <Text style={styles(period).textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
