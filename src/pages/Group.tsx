import React, {FC, useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getGroupListThunk} from '../lib/groupApis';
import {RootReducerType} from '../store/rootReducer';
import GroupCard from '../components/GroupCard';
import Page from '../components/Page';
import GroupDetailModal from '../components/modal/GroupDetailModal';
import {GroupType} from '../slices/group.d';

const Group: FC = () => {
  const dispatch = useDispatch();
  const {groupList} = useSelector((state: RootReducerType) => state.group);

  const [visible, setVisible] = useState(false);
  const [groupIdx, setGroupIdx] = useState<number>();

  console.log(groupList);

  useEffect(() => {
    dispatch(getGroupListThunk(1));
  }, [dispatch]);

  return (
    <Page>
      <Text style={styles.title}>그룹 보기</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {groupList.map((group: GroupType, index: number) => (
          <GroupCard
            key={index}
            name={group.NAME}
            comment={group.COMMENT}
            event={() => {
              setVisible(!visible);
              setGroupIdx(group.GROUP_IDX);
            }}
          />
        ))}
      </ScrollView>
      <GroupDetailModal
        visible={visible}
        setVisible={setVisible}
        groupIdx={groupIdx}
      />
    </Page>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#3f3d56',
    fontWeight: 'bold',
  },
});

export default Group;
