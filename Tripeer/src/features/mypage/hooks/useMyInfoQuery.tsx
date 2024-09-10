import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import getMyInfo, { getIsDuplicate } from '../api/getMyInfo';
import { ProfileType } from '../../../types/UserTypes';
import { useEffect } from 'react';

export default function useMyInfoQuery() {
  const { data } = useSuspenseQuery<ProfileType>({
    queryKey: ['myinfo'],
    queryFn: getMyInfo,
  });

  return { data };
}

export function useDuplicateQuery(
  nickname: string,
  getRequest: boolean,
  setGetRequest: (param: boolean) => void,
) {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['duplicate', nickname],
    queryFn: async () => await getIsDuplicate(nickname),
    enabled: !!getRequest,
  });

  useEffect(() => {
    if (isSuccess || isError) setGetRequest(false);
  }, [isSuccess, isError, setGetRequest]);

  return { data, isError, isLoading, isSuccess };
}
