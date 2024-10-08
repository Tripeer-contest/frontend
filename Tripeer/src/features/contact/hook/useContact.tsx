import { useMutation } from '@tanstack/react-query';
import { ContactTypes } from '../types/ContactType';
import { postContact } from '../api/postContact';

export default function useContact(data: ContactTypes) {
  const mutation = useMutation({
    mutationFn: async () => {
      const { sender, subject, content } = data;
      return await postContact(sender, subject, content);
    },
  });
  return mutation;
}
