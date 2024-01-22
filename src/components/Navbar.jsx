import { Link } from "react-router-dom";
import { NavbarStack } from "../theme/theme";
import { logo } from "../utilities/constants";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <NavbarStack>
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} style={{ height: 45 }} alt="logo" />
      </Link>
      <Searchbar />
    </NavbarStack>
  );
}

export default Navbar;
