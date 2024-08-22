import axios from 'axios';

interface Props {
  id: string;
  pw: string;
}

export const postAdmin = async ({ id, pw }: Props) => {
  return await axios.post('/api/admin/login', {
    id: id,
    password: pw,
  });
};
