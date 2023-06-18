import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
