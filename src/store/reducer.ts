import {combineReducers} from 'redux';

import userSlice from '../slices/user';
import noticeSlice from '../slices/notice';
import groupSlice from '../slices/group';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  notice: noticeSlice,
  group: groupSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
