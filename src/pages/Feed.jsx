import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";
import { FeedBox, FeedCopyright, FeedStack } from "../theme/theme";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

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
    <FeedStack>
      <FeedBox>
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FeedCopyright className="copyright">
          Copyright {new Date().getFullYear()} JSM Media
        </FeedCopyright>{" "}
      </FeedBox>
      <FeedBox sx={{ padding: 2, overflow: "auto", flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} color="#FFF">
          {activeCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </FeedBox>
    </FeedStack>
  );
}

export default Feed;
