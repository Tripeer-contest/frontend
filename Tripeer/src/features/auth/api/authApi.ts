import axios from 'axios';

export async function sendEmailCode(url: string, email: string) {
  try {
    const res = await axios.get(`${url}/${email}`);
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function postValideEmail(
  email: string,
  code: string,
  url: string,
) {
  try {
    const res = await axios.post(url, {
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

export async function tripeerSignUp(
  register: {
    email?: string;
    password?: string;
    code?: string;
  },
  url: string,
  method: string,
) {
  try {
    let res = null;
    if (method === 'patch') {
      res = await axios.patch(url, register);
    } else {
      res = await axios.post(url, register);
    }
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
