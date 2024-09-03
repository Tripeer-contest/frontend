import { useMutation } from '@tanstack/react-query';
import { inviteUser } from '../api/postUsers';
import { useEffect } from 'react';

interface InviteParameter {
  userId: number;
  planId: number;
}

export default function useInviteQuery() {
  const { error, isError, isPending, isSuccess, mutate } = useMutation<
    any,
    { message: string },
    InviteParameter
  >({
    mutationFn: ({ userId, planId }: InviteParameter) =>
      inviteUser(userId, planId),
  });

  useEffect(() => {
    if (error) console.log(error.message);
  }, [error]);
  return { error, isError, isPending, isSuccess, mutate };
}
