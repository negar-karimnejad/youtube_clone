import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const router = useRoutes(routes);

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      {/* {router} */}
    </Box>
  );
}

export default App;
