import { newField } from '@/lib/firebase';
import { useMutation, useQueryClient } from '@tanstack/react-query';
export function useAddNewField() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      name,
      newfield,
    }: {
      projectId: string;
      name: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      newfield: any[];
    }) => newField(projectId, name, newfield),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['personal'],
      });
    },
  });
}
