import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from './';

export const getGroupListThunk = createAsyncThunk(
  'notice/getNoticeList',
  async (params: number) => {
    const result = await get({
      url: `http://ec2-18-182-33-159.ap-northeast-1.compute.amazonaws.com:3000/group/groupList/${params}?sortation=1`,
    });
    return result;
  },
);
