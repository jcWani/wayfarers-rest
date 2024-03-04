import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
