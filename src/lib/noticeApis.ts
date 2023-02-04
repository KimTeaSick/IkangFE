import {NoticeType} from './../slices/notice.d';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {get, post} from './';

export const getNoticeListThunk = createAsyncThunk(
  'notice/getNoticeList',
  async (): Promise<NoticeType[]> => {
    const result = await get({
      url: 'http://ec2-18-182-33-159.ap-northeast-1.compute.amazonaws.com:3000/notice/getNoticeList',
    });
    return result;
  },
);

export const getDetailNoticeThunk = createAsyncThunk(
  'notice/getDetailNoticeThunk',
  async (idx: number): Promise<NoticeType> => {
    const body = {num: idx};
    const result = await post({
      url: 'http://ec2-18-182-33-159.ap-northeast-1.compute.amazonaws.com:3000/notice/detailNotice',
      body,
    });
    return result[0];
  },
);
