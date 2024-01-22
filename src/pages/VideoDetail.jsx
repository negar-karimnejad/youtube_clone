/* eslint-disable no-unsafe-optional-chaining */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import VideoDetailCard from "../components/VideoDetailCard";
import { CustomCheckCircle, VideoDetailGrid } from "../theme/theme";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  const { title, channelId, channelTitle } = video.snippet;

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet.statistics&id=${id}`).then((data) =>
      setVideo(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" display={"flex"} gap={2}>
      <Box flex={9}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />
        <Box sx={{ px: 2, pt: 2 }}>
          <Typography variant="body1" color="#fff" sx={{ pb: 1 }}>
            {title}
          </Typography>
          <Link to={`/channel/${channelId}`}>
            <Typography variant="body1" color="#999">
              {channelTitle}
              <CustomCheckCircle />
            </Typography>
          </Link>
        </Box>
      </Box>

      <VideoDetailGrid container spacing={3}>
        {videos?.length > 0 &&
          videos.map((video) => (
            <VideoDetailCard key={video.id.videoId} {...video} />
          ))}
      </VideoDetailGrid>
    </Box>
  );
}

export default VideoDetail;
