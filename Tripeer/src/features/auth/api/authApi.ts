import axios from 'axios';
import { Register } from '../components/RegisterPage';

export async function sendEmailCode(email: string) {
  try {
    const res = await axios.get(
      `https://tripeer.co.kr/api/user/valid/email/${email}`,
    );
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function postValideEmail(email: string, code: string) {
  try {
    const res = await axios.post(`https://tripeer.co.kr/api/user/valid/email`, {
      email,
      code,
    });
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function duplicateNick(nickname: string) {
  try {
    const res = await axios.get(
      `https://tripeer.co.kr/api/user/name/duplicatecheck/${nickname}`,
    );
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function tripeerSignUp(register: Register) {
  try {
    const res = await axios.post(
      `https://tripeer.co.kr/api/user/signup/custom`,
      register,
    );
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function tripeerLogin(email: string, password: string) {
  try {
    const res = await axios.post(
      'https://tripeer.co.kr/api/user/login/custom',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}
