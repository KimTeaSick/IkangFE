import {GroupInitialStateType} from './group.d';
import {createSlice} from '@reduxjs/toolkit';
import {getGroupListThunk} from '../lib/groupApis';

const initialState: GroupInitialStateType = {
  groupList: [],
  groupListStatus: '',

  groupDetail: {},
  groupDetailStatus: '',
};
const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGroupListThunk.pending, state => {
      state.groupListStatus = 'pending';
    });
    builder.addCase(getGroupListThunk.fulfilled, (state, action) => {
      state.groupListStatus = 'success';
      state.groupList = action.payload;
    });
  },
});

export default groupSlice.reducer;
