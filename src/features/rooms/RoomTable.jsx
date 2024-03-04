import { useRooms } from "./useRooms";

import { useSearchParams } from "react-router-dom";

import RoomRow from "./RoomRow";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

function RoomTable() {
  const { isLoading, rooms } = useRooms();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!rooms.length) return <Empty resourceName="rooms" />;

  const filterValue = searchParams.get("discount") || "all";

  // FILTER
  let filteredRooms;
  if (filterValue === "all") filteredRooms = rooms;
  if (filterValue === "no-discount")
    filteredRooms = rooms.filter((room) => room.discount === 0);
  if (filterValue === "with-discount")
    filteredRooms = rooms.filter((room) => room.discount > 0);

  // SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortedRooms;
  if (field === "name") {
    sortedRooms = filteredRooms.sort((a, b) => {
      // Check if both elements are strings
      if (typeof a[field] === "string" && typeof b[field] === "string") {
        return a[field].localeCompare(b[field]) * modifier; // Sort strings alphabetically
      }
      // If one of the elements is not a string, it will be sorted after the string
      return (typeof a[field] === "string" ? -1 : 1) * modifier;
    });
  } else {
    sortedRooms = filteredRooms.sort(
      (a, b) => (a[field] - b[field]) * modifier
    );
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Room</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedRooms}
          render={(room) => <RoomRow room={room} key={room.id} />}
        />
      </Table>
    </Menus>
  );
}

export default RoomTable;
