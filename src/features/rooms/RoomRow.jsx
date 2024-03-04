import { useCreateRoom } from "./useCreateRoom";
import { useDeleteRoom } from "./useDeleteRoom";
import { formatCurrency } from "../../utils/helpers";
import { IoCreate, IoDocuments, IoTrash } from "react-icons/io5";

import styled from "styled-components";
import CreateRoomForm from "../../features/rooms/CreateRoomForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function RoomRow({ room }) {
  const { isDeleting, deleteRoom } = useDeleteRoom();
  const { isCreating, createRoom } = useCreateRoom();

  const {
    id: roomId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = room;

  function handleDuplicate() {
    createRoom({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Room>{name}</Room>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>

        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}

        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={roomId} />

              <Menus.List id={roomId}>
                <Menus.Button
                  icon={<IoDocuments />}
                  onClick={handleDuplicate}
                  disabled={isCreating}
                >
                  Duplicate
                </Menus.Button>

                <Modal.Open opens="update">
                  <Menus.Button icon={<IoCreate />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<IoTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="update">
                <CreateRoomForm roomToUpdate={room} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="room"
                  onConfirm={() => deleteRoom(roomId)}
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default RoomRow;
