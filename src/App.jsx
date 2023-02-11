import { Box, Container } from "@mui/material";

import { Routes, Route, Link } from "react-router-dom";

import Questions from "./Pages/Questions";
import Starting from "./Pages/Starting";
import TheEnd from "./Pages/TheEnd";

function App() {
  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Routes>
            <Route path="/" element={<Starting />} />
            <Route path="/quiz" element={<Questions />} />
            <Route path="/theEnd" element={<TheEnd />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
