import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateRoomForm from "./CreateRoomForm";

function AddRoom() {
  return (
    <Modal>
      <Modal.Open opens="room-form">
        <Button>Add new room</Button>
      </Modal.Open>
      <Modal.Window name="room-form">
        <CreateRoomForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddRoom;
