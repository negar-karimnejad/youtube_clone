import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import { useEffect, useState } from "react";

function Feed() {
  const [activeCategory, setActiveCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${activeCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [activeCategory]);

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
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
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
      <Box sx={{ padding: 2, overflow: "auto", flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} color="#FFF">
          New <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
