import api from '../../../utils/api';

export async function postContact(
  sender: string,
  subject: string,
  content: string,
) {
  try {
    const res = await api.post(`/email/helpdesk?sender`, {
      sender,
      subject,
      content,
    });
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
