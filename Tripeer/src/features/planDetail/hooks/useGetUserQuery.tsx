import { useQuery } from '@tanstack/react-query';
import getUsers from '../api/getUsers';
import { useEffect, useRef, useState } from 'react';
import { UserType } from '../../../types/UserTypes';

export function useGetUserQuery(keyword: string) {
  const { data, isLoading, isError } = useQuery<{ data: UserType[] }>({
    queryKey: ['user', 'search', keyword],
    queryFn: async () => getUsers(keyword),
    enabled: !!keyword,
  });

  return { data, isLoading, isError };
}

export function useGetSlowUserQuery(keyword: string) {
  const [slowKeyword, setSlowKeyword] = useState('');
  const timerId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (keyword) {
      if (timerId.current) clearTimeout(timerId.current);
      const id = setTimeout(() => {
        setSlowKeyword(keyword);
      }, 500);
      timerId.current = id;
    }
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [keyword]);
  return useGetUserQuery(slowKeyword);
}
