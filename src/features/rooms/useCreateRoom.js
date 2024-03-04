import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateRoom } from "../../services/apiRoom";

import toast from "react-hot-toast";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createRoom } = useMutation({
    mutationFn: createUpdateRoom,
    onSuccess: () => {
      toast.success("New room successfully created");

      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createRoom };
}
