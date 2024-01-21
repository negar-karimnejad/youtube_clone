/* eslint-disable react/prop-types */
import { CheckCircle } from "@mui/icons-material";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

function Videos({ videos }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {videos?.length > 0 &&
          videos.map((video) => (
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
                    sx={{ backgroundColor: "#1E1E1E", height: "106px", pb: 5 }}
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
  );
}

export default Videos;
