import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";

function Feed() {
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          position: "relative",
        }}
      >
        <Sidebar />
        <Typography
          className="copyright"
          sx={{
            color: "#FFF",
            mt: 1.5,
            display: { xs: "none", md: "flex" },
            position: "absolute",
            bottom: 10,
            fontSize: 13,
          }}
        >
          Copyright {new Date().getFullYear()} JSM Media
        </Typography>{" "}
      </Box>
    </Stack>
  );
}

export default Feed;
