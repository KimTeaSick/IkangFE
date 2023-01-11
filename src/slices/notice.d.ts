export type NoticeInitialState = {
  noticeList: NoticeType[];
  noticeListStatus: string;

  detailNotice: NoticeType;
  detailNoticeStatus: string;
};

export type NoticeType = {
  NOTICE_IDX: number;
  WRITER_IDX: number;
  CONTENT: string;
  REG_DATE: string;
  TITLE: string;
  NAME?: string;
};
