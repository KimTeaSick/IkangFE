import {GroupInitialStateType} from './../slices/group.d';
import {UsersInitialState} from './../slices/users.d';
import {NoticeInitialState} from './../slices/notice.d';

export type RootReducerType = {
  users: UsersInitialState;
  notice: NoticeInitialState;
  group: GroupInitialStateType;
};
