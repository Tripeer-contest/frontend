import { AxiosResponse } from 'axios';
import api from '../../../utils/api';
import { PlanTypes } from '../types/PlanTypes';

export default async function postPlan(
  data: PlanTypes,
): Promise<AxiosResponse> {
  try {
    const response = await api.post('/plan', data);
    return response;
  } catch {
    throw new Error('에러발생');
  }
}
