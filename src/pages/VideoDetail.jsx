import { CheckCircle } from "@mui/icons-material";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);

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
            {video?.snippet.title}
          </Typography>
          <Link to={`/channel/${video?.snippet.channelId}`}>
            <Typography variant="body1" color="#999">
              {video?.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </Box>
      </Box>

      <Grid
        container
        spacing={3}
        flex={3}
        sx={{
          overflowY: "scroll",
          height: "95vh",
        }}
      >
        {videos?.length > 0 &&
          videos.map((video) => (
            <Grid key={video.id.videoId} item xs={12}>
              <Card
                sx={{
                  color: "#FFF",
                }}
              >
                <CardActionArea>
                  <Link to={`/video/${video.id.videoId}`}>
                    <CardMedia
                      sx={{ height: 180 }}
                      component="img"
                      image={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                    />
                  </Link>
                  <CardContent
                    sx={{
                      backgroundColor: "#1E1E1E",
                      height: "106px",
                      pb: 5,
                    }}
                  >
                    <Typography
                      gutterBottom
                      sx={{
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {video.snippet.title.slice(0, 60)}...
                    </Typography>
                    <Box>
                      <Link to={`/channel/${video.snippet?.channelId}`}>
                        <Typography color="#999" sx={{ fontSize: 16, mt: 2 }}>
                          {video.snippet.channelTitle}
                          <CheckCircle
                            sx={{
                              fontSize: "12px",
                              color: "gray",
                              ml: "5px",
                            }}
                          />
                        </Typography>
                      </Link>
                      <Typography variant="body1" color="initial"></Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default VideoDetail;
