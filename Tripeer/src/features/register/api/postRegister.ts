import axios from 'axios';

interface Props {
  r_nickname: string;
  r_year: string;
  r_month: string;
  r_day: string;
  r_style: number[];
}

export const postRegister = async ({
  r_nickname,
  r_year,
  r_month,
  r_day,
  r_style,
}: Props) => {
  return await axios.post(
    '/api/user/signup',
    {
      nickname: r_nickname,
      year: r_year,
      month: r_month,
      day: r_day,
      style1: r_style[0],
      style2: r_style[1] ? r_style[1] : null,
      style3: r_style[2] ? r_style[2] : null,
    },
    { withCredentials: true },
  );
};
