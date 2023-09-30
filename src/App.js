import React from "react";
import { Box } from "@mui/material";
import Calculator from "./calculator/Calculator";

function App() {
  return (
    <>
      <Box
        width="100%"
        textAlign="center"
        fontSize={{ xs: "30px", md: "40px" }}
      >
        <div className="gradient-text">Calculator App</div>
      </Box>

      <Calculator />
    </>
  );
}

export default App;
