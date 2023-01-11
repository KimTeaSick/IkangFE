import {combineReducers} from 'redux';

import userSlice from '../slices/user';
import noticeSlice from '../slices/notice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  notice: noticeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
