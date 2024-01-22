/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ChannelCardContent,
  ChannelCardMedia,
  CustomCheckCircle,
} from "../theme/theme";
import { demoProfilePicture } from "../utilities/constants";

// eslint-disable-next-line react/prop-types
const ChannelCard = ({ channel, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <ChannelCardContent>
        <ChannelCardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
        />
        <Typography variant="h6">
          {channel?.snippet?.title}
          <CustomCheckCircle />
        </Typography>
        {channel?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "}
            Subscribers
          </Typography>
        )}
      </ChannelCardContent>
    </Link>
  </Box>
);

export default ChannelCard;
