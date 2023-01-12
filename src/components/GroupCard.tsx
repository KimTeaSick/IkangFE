import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './GrouopCard.styled';
import Avatar from './Avatar';

interface GroupCardPreops {
  name: string;
  comment: string;
  event: () => void;
}
const GroupCard: FC<GroupCardPreops> = ({name, comment, event}) => {
  return (
    <TouchableOpacity style={styles.cardCover} onPress={event}>
      <View style={styles.avatarSection}>
        <Avatar />
      </View>
      <View>
        <Text style={styles.groupName}>{name}</Text>
        <Text style={styles.groupComment}>{comment}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GroupCard;
