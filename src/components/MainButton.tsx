import React, {FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './MainButton.styled';
import Icon from 'react-native-vector-icons/Ionicons';

interface MainButtonProps {
  event: () => void;
  iconName: string;
  title: string;
}

const MainButton: FC<MainButtonProps> = ({event, iconName, title}) => {
  return (
    <TouchableOpacity onPress={event} style={styles.icon}>
      <Text>
        <Icon name={iconName} size={70} color="#f4a555" />
      </Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
