/* eslint-disable react/prop-types */
import { CardActionArea, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { ChannelDetailCardContent, CustomCheckCircle, Title } from "../theme/theme";

function ChannelDetailCard({ video }) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
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
          <ChannelDetailCardContent>
            <Title gutterBottom>{video.snippet.title.slice(0, 60)}...</Title>
            <Link to={`/channel/${video.snippet?.channelId}`}>
              <Typography color="#999" sx={{ fontSize: 16, mt: 2 }}>
                {video.snippet.channelTitle}
                <CustomCheckCircle />
              </Typography>
            </Link>
          </ChannelDetailCardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ChannelDetailCard;
