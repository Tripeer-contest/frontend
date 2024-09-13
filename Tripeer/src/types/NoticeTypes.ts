export default interface NoticeInterface {
  totalPage: number;
  summaryList: summary[];
}

export type summary = {
  noticeId: number;
  title: string;
  createTime: string;
};
