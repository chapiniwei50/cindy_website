import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';

import IntroPage from './pages/Intro';
import TsmcPage from './pages/Tsmc';
import CytesiPage from './pages/Cytesi';
import StanfordPage from './pages/Stanford';
import MiniminecraftPage from './pages/Miniminecraft';
import SafestreetnycPage from './pages/safestreetnyc'; 
import PetbookPage from './pages/Petbook'; 
import PathatpennPage from './pages/Pathatpenn'; 
import PennsparkPage from './pages/Pennspark'; 
import EduquestPage from './pages/Eduquest';

import './App.css';

export const theme = createTheme({
  palette: {
    mode: 'light', 
    primary: {
      main: '#fffff', 
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',  
      paper: '#ffffff',   
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: '"Hammersmith One", "Hanken Grotesk", sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/tsmc" element={<TsmcPage />} />
          <Route path="/cytesi" element={<CytesiPage />} />
          <Route path="/stanford" element={<StanfordPage />} />
          <Route path="/mini-minecraft" element={<MiniminecraftPage />} />
          <Route path="/safestreetnyc" element={<SafestreetnycPage />} />
          <Route path="/petbook" element={<PetbookPage />} />
          <Route path="/pathatpenn" element={<PathatpennPage />} />
          <Route path="/pennspark" element={<PennsparkPage />} />
          <Route path="/eduquest" element={<EduquestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
