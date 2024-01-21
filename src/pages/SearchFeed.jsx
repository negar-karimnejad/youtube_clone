import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../components/Videos";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ padding: 2, overflow: "auto", flex: 2 }}>
      <Typography variant="h5" fontWeight={"bold"} mb={2} color="#FFF">
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm} </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
