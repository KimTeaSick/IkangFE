import React, {Dispatch, FC, SetStateAction} from 'react';
import {Modal, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../Avatar';

interface GroupDetailModalProps {
  groupIdx?: number;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const GroupDetailModal: FC<GroupDetailModalProps> = ({
  groupIdx,
  visible,
  setVisible,
}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.closeSection}
          onPress={() => setVisible(!visible)}>
          <Icon name={'close'} size={30} color="#f4a555" />
        </TouchableOpacity>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Avatar />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>최태강 강사님</Text>
          <Text style={styles.comment}>
            최태강 강사님의 올려보는 고등수학 C반
          </Text>
          <Text style={styles.students}>소속 학생들</Text>
          <Text style={styles.students}>{groupIdx}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'relative',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    bottom: 0,
    padding: 10,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  closeSection: {
    alignItems: 'flex-end',
  },
  avatarSection: {
    width: '100%',
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3f3d56',
    marginBottom: 5,
  },
  comment: {
    fontSize: 18,
    color: '#3f3d56',
    fontWeight: 'bold',
  },
  students: {
    fontSize: 20,
    marginVertical: 20,
    color: '#f4a555',
    fontWeight: 'bold',
  },
});

export default GroupDetailModal;
