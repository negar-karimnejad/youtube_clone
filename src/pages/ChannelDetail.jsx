import { CheckCircle } from "@mui/icons-material";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import ChannelCard from "../components/ChannelCard";

function ChannelDetail() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  console.log(channel);
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
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        {/* <ChannelCard channelDetail={channel} marginTop="-93px" /> */}
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {channelVideos?.length > 0 &&
            channelVideos.map((video) => (
              <Grid key={video.id.videoId} item xs={12} sm={6} lg={4}>
                <Card
                  sx={{
                    color: "#FFF",
                  }}
                >
                  <CardActionArea>
                    <Link to={`/video/${video.id.videoId}`}>
                      <CardMedia
                        sx={{ width: "100%", height: 180 }}
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
                      <Link to={`/channel/${video.snippet?.channelId}`}>
                        <Typography color="#999" sx={{ fontSize: 16, mt: 2 }}>
                          {video.snippet.channelTitle}
                          <CheckCircle
                            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                          />
                        </Typography>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
