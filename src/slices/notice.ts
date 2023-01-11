import {NoticeInitialState, NoticeType} from './notice.d';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Notice from '../lib/noticeApis';

const initialState: NoticeInitialState = {
  noticeList: [],
  noticeListStatus: '',

  detailNotice: <NoticeType>{},
  detailNoticeStatus: '',
};

const NoticeSlice = createSlice({
  name: 'NoticeSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      Notice.getNoticeListThunk.pending,
      (state: NoticeInitialState) => {
        state.noticeListStatus = 'loading';
      },
    );
    builder.addCase(
      Notice.getNoticeListThunk.fulfilled,
      (
        state: NoticeInitialState,
        action: PayloadAction<NoticeType[], string>,
      ) => {
        state.noticeListStatus = 'success';
        state.noticeList = action.payload;
        console.log('action.payload', action.payload);
      },
    );
    builder.addCase(
      Notice.getNoticeListThunk.rejected,
      (state: NoticeInitialState, action) => {
        state.noticeListStatus = `error ${action.error}`;
      },
    );

    builder.addCase(
      Notice.getDetailNoticeThunk.pending,
      (state: NoticeInitialState) => {
        state.detailNoticeStatus = 'loading';
      },
    );
    builder.addCase(
      Notice.getDetailNoticeThunk.fulfilled,
      (
        state: NoticeInitialState,
        action: PayloadAction<NoticeType, string>,
      ) => {
        state.detailNoticeStatus = 'success';
        state.detailNotice = action.payload;
        console.log('action.payload', action.payload);
      },
    );
    builder.addCase(
      Notice.getDetailNoticeThunk.rejected,
      (state: NoticeInitialState, action) => {
        state.detailNoticeStatus = `error ${action.error}`;
      },
    );
  },
});

export default NoticeSlice.reducer;
