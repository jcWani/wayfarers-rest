import { useLogout } from "./useLogout";
import { IoLogOutOutline } from "react-icons/io5";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <IoLogOutOutline /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
