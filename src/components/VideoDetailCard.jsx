/* eslint-disable react/prop-types */
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import {
    ChannelDetailCardContent,
    CustomCheckCircle,
    Title,
} from "../theme/theme";

function VideoDetailCard({ video }) {
  return (
    <Grid item xs={12}>
      <Card color="#FFF">
        <CardActionArea>
          <Link to={`/video/${video.id.videoId}`}>
            <CardMedia
              sx={{ height: 180 }}
              component="img"
              image={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
          </Link>
          <ChannelDetailCardContent>
            <Title gutterBottom>{video.snippet.title.slice(0, 60)}...</Title>
            <Box>
              <Link to={`/channel/${video.snippet?.channelId}`}>
                <Typography color="#999" sx={{ fontSize: 16, mt: 2 }}>
                  {video.snippet.channelTitle}
                  <CustomCheckCircle />
                </Typography>
              </Link>
              <Typography variant="body1" color="initial"></Typography>
            </Box>
          </ChannelDetailCardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default VideoDetailCard;
