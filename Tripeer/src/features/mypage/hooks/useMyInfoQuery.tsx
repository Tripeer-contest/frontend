import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import getMyInfo, { getIsDuplicate } from '../api/getMyInfo';
import { ProfileType } from '../../../types/UserTypes';
import { useEffect } from 'react';
import { patchImage, patchMyInfo } from '../api/patchMyInfo';

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

export function usePatchImage() {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: (img: File) => patchImage(img),
    onSuccess: (data) => {
      queryClient.setQueryData(['myinfo'], (old: ProfileType) => {
        return { ...old, profileImage: data.imageUrl };
      });
    },
  });
  return { mutate, isError, isPending, error };
}

export function usePatchProfile() {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: ({
      nickname,
      styles,
    }: {
      nickname: string;
      styles: number[];
    }) => patchMyInfo(nickname, styles),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myinfo'] });
    },
  });

  return { mutate, isError, isPending, error };
}
