import {
    Box,
    CardContent,
    CardMedia,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// NAVBAR
export const NavbarStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
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
  flexDirection: { md: "column" },
  p: theme.spacing(1),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up("sx")]: {
    height: "auto",
  },
  [theme.breakpoints.up("md")]: {
    height: "95%",
  },
}));

export const SidebarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  borderRadius: 20,
  px: theme.spacing(2),
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    py: theme.spacing(1),
  },
  [theme.breakpoints.up("xs")]: {
    py: theme.spacing(0),
  },
}));

// SEARCHBAR
export const SearchbarPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 20,
  border: "1px solid #e3e3e3",
  boxShadow: "none",
  pl: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    mr: theme.spacing(5),
  },
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
  mb: theme.spacing(2),
  border: "1px solid #e3e3e3",
}));

// CHANNEL DETAIL
export const ChannelDetailCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "#1E1E1E",
  height: "106px",
  pb: theme.spacing(5),
}));

// VIDEOS
export const Title = styled(Typography)(() => ({
  fontSize: 18,
  fontWeight: "bold",
}));
