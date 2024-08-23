import axios from 'axios';

export const getNicknameCheck = async (value: string) => {
  const response = await axios.get(`/api/user/name/duplicatecheck/${value}`);

  return { check: response.data };
};
