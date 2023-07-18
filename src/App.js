import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
//Styles
import "./App.css";
//Pages
import MainPage from "./Pages/MainPage/MainPage";
//Components
import FooterCase from "./Components/FooterCase/FooterCase";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/src/Pages/MainPage/MainPage"
              element={<MainPage />}
            />
          </Routes>
          <FooterCase></FooterCase>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
