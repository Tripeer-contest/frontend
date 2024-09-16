export default interface NoticeInterface {
  totalPage: number;
  noticeList: summary[];
}

export type summary = {
  noticeId: number;
  title: string;
  content: string;
  createTime: string;
};
