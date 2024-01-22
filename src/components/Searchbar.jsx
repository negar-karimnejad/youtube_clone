import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchbarPaper } from "../theme/theme";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <SearchbarPaper component="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: "none",
          outline: "none",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </SearchbarPaper>
  );
}

export default Searchbar;
