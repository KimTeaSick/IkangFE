import {NoticeType} from './../slices/notice.d';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from './';

export const getNoticeListThunk = createAsyncThunk(
  'notice/getNoticeList',
  async (): Promise<NoticeType[]> => {
    const result = await get({
      url: 'https://egback.loca.lt/notice/getNoticeList',
    });
    return result;
  },
);

export const getDetailNoticeThunk = createAsyncThunk(
  'notice/getDetailNoticeThunk',
  async (idx: number): Promise<NoticeType> => {
    const body = {num: idx};
    const result = await post({
      url: 'https://egback.loca.lt/notice/detailNotice',
      body,
    });
    return result[0];
  },
);
