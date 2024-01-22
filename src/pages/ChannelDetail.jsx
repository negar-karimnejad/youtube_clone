import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelBanner from "../components/ChannelBanner";
import ChannelCard from "../components/ChannelCard";
import ChannelDetailCard from "../components/ChannelDetailCard";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

function ChannelDetail() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet.statistics&id=${id}`).then((data) =>
      setChannel(data.items[0])
    );

    fetchFromAPI(
      `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
    ).then((data) => setChannelVideos(data.items));
  }, [id]);

  return (
    <Box>
      <Box>
        <ChannelBanner />
        <ChannelCard channelDetail={channel} marginTop="-93px" />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {channelVideos?.length > 0 &&
            channelVideos.map((video) => (
              <ChannelDetailCard key={video.id.videoId} {...video} />
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
