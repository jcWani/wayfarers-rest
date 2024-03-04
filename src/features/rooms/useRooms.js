import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRoom";

export function useRooms() {
  const { isLoading, data: rooms } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { isLoading, rooms };
}
