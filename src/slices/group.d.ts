export type GroupInitialStateType = {
  groupList: GroupType[];
  groupListStatus: string;

  groupDetail: {};
  groupDetailStatus: string;
};

export type GroupType = {
  COMMENT: string;
  NAME: string;
  REG_DATE: string;
  GROUP_IDX: number;
  TEACHER_IDX: number;
};
