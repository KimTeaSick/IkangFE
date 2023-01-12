import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from './';

export const getGroupListThunk = createAsyncThunk(
  'notice/getNoticeList',
  async (params: number) => {
    const result = await get({
      url: `https://egback.loca.lt/group/groupList/${params}?sortation=1`,
    });
    return result;
  },
);
