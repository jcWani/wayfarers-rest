import Heading from "../ui/Heading";
import Row from "../ui/Row";

import RoomTable from "../features/rooms/RoomTable";
import AddRoom from "../features/rooms/AddRoom";
import RoomsTableOperations from "../features/rooms/RoomsTableOperations";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All rooms</Heading>
        <RoomsTableOperations />
      </Row>

      <Row>
        <RoomTable />

        <div>
          <AddRoom />
        </div>
      </Row>
    </>
  );
}

export default Rooms;
