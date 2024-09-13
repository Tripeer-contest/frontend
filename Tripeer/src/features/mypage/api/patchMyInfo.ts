import api from '../../../utils/api';

export async function patchImage(img: File) {
  const form = new FormData();
  form.append('image', img);
  try {
    const res = await api.patch(`/user/myinfo/profileimage`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message);
  }
}

export async function patchMyInfo(nickname: string, style: number[]) {
  try {
    const body: any = { nickname };
    style.forEach((st, idx) => (body[`style${idx + 1}Num`] = st + 1));
    const res = await api.patch(`user/myinfo`, JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
    return res.data.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message);
  }
}
