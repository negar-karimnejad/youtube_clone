import { Box } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      {router}
    </Box>
  );
}

export default App;
