import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utilities/constants";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        padding: 2,
        position: "sticky",
        top: 0,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000",
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} style={{ height: 45 }} alt="logo" />
      </Link>
      <Searchbar />
    </Stack>
  );
}

export default Navbar;
