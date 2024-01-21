/* eslint-disable react/prop-types */
import { Box, Typography, Grid } from "@mui/material";

function Videos({ videos }) {
  console.log(videos);

  return (
    <Grid
      container
      sx={{ width: "100%", gridColumn: { sx: 12, md: 3, lg: 4 } }}
    >
      {videos?.length > 0 &&
        videos.map((video) => (
          <Grid
            item
            key={video.id.videoId}
            sx={{
              backgroundColor: "#222",
              pb: 5,
            }}
          >
            <img
              style={{ width: "100%" }}
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body1"
                color="#FFF"
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {video.snippet.title}
              </Typography>
              <Typography
                variant="body1"
                color="#999"
                sx={{ fontSize: 16, mt: 2 }}
              >
                {video.snippet.channelTitle}
              </Typography>
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}

export default Videos;
