import { useSuspenseQuery } from '@tanstack/react-query';
import getMyInfo from '../api/getMyInfo';
import { ProfileType } from '../../../types/UserTypes';

export default function useMyInfoQuery() {
  const { data } = useSuspenseQuery<ProfileType>({
    queryKey: ['myinfo'],
    queryFn: getMyInfo,
  });

  return { data };
}
