import { Box, Stack } from "@mui/material";
import { categories } from "../utilities/constants";

// eslint-disable-next-line react/prop-types
function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        p: 1,
        gap: { md: 3 },
      }}
    >
      {categories.map((category, index) => (
        <Box
          onClick={() => setActiveCategory(category.name)}
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: 20,
            px: 2,
            py: { xs: 0, md: 1 },
            cursor: "pointer",
          }}
          style={{
            backgroundColor: activeCategory === category.name && "#FC1503",
          }}
        >
          <span
            style={{
              color: activeCategory === category.name ? "#FFF" : "#FC1503",
            }}
          >
            {category.icon}
          </span>
          <span style={{ color: "#FFF" }}>{category.name}</span>
        </Box>
      ))}
    </Stack>
  );
}

export default Sidebar;
