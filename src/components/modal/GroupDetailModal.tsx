import React, {FC} from 'react';
import {Modal, View, StyleSheet, Text} from 'react-native';
import Avatar from '../Avatar';

interface GroupDetailModalProps {
  visible: boolean;
}

const GroupDetailModal: FC<GroupDetailModalProps> = ({visible}) => {
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <View style={styles.modalContent}>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Avatar />
          </View>
        </View>
        <View style={styles.content}>
          <Text>그룹 모달</Text>
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
});

export default GroupDetailModal;
