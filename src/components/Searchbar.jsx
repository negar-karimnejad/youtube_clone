import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";

function Searchbar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: "none",
          outline: "none",
        }}
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        onClick={() => {}}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
