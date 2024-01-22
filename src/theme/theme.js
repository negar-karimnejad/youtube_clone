import {
  Box,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// NAVBAR
export const NavbarStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  position: "sticky",
  top: 0,
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#000",
  zIndex: 50,
}));

// SIDEBAR
export const SidebarStack = styled(Stack)(({ theme }) => ({
  overflow: "auto",
  height: { sx: "auto", md: "95%" },
  padding: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("sx")]: {
    height: "auto",
  },
  [theme.breakpoints.up("md")]: {
    height: "95%",
    flexDirection: "column",
  },
}));

export const SidebarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  borderRadius: 20,
  padding: theme.spacing(1, 2, 1, 2),
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0.4, 2),
  },
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, 2),
  },
}));

// SEARCHBAR
export const SearchbarPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  border: "1px solid #e3e3e3",
  boxShadow: "none",
  paddingLeft: theme.spacing(2),
}));

// CHANNEL CARD
export const ChannelCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
}));

export const ChannelCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: "50%",
  height: "180px",
  width: "180px",
  marginBottom: theme.spacing(2),
  border: "1px solid #e3e3e3",
}));

// CHANNEL DETAIL
export const ChannelDetailCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  height: "106px",
  paddingBottom: theme.spacing(5),
}));

// VIDEOS
export const Title = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: "bold",
}));

// VIDEO DETAIL
export const VideoDetailGrid = styled(Grid)(() => ({
  flex: 3,
  overflowY: "scroll",
  height: "95vh",
}));

// FEED
export const FeedCopyright = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  padding: theme.spacing(1),
  position: "fixed",
  backgroundColor: "#000",
  bottom: 0,
  fontSize: 13,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const FeedStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("sx")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const FeedBox = styled(Box)(({ theme }) => ({
  borderRight: "1px solid #3d3d3d",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    padding: (0, 2, 0, 2),
  },
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

// CUSTOM CHECK CIRCLE
export const CustomCheckCircle = styled(CheckCircle)(({ theme }) => ({
  fontSize: "14px",
  color: "gray",
  margin: theme.spacing(0, 0, 0, "5px"),
}));
