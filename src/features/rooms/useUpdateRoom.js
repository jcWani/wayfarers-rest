import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateRoom } from "../../services/apiRoom";

import toast from "react-hot-toast";

export function useUpdateRoom() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateRoom } = useMutation({
    mutationFn: ({ newRoomData, id }) => createUpdateRoom(newRoomData, id),
    onSuccess: () => {
      toast.success("Room successfully updated");

      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateRoom };
}
