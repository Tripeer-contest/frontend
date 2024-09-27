import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReview, postReview } from '../../spot/api/getSpotDetail';

export function useDiaryReviewMutation(planId: string) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: ({
      reviewReq,
      images,
    }: {
      reviewReq: {
        spotInfoId: string;
        starPoint: string;
        message: string;
      };
      images?: File[];
    }) => postReview(reviewReq, images),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['diary', planId] });
    },
  });
  return { mutate, isPending, isError, isSuccess };
}

export function useDiaryReviewRemove(planId: string) {
  const queryClient = useQueryClient();
  const { mutate, isError } = useMutation({
    mutationFn: ({ spotReviewId }: { spotReviewId: number }) =>
      deleteReview(spotReviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['diary', planId] });
    },
  });
  return { mutate, isError };
}
