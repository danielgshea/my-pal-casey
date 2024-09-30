/**
 * App.tsx
 * 
 * This file contains the main App component.
 * The App component is the root component of the app.
 * It provides the AppContext to the app and sets up the routing.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Sports from './pages/Sports';
import Chat from './pages/Chat';
import SportsSchedule from './pages/SportsSchedule';
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#61CCC0',
      light: '#94E4DB',
      dark: '#07887B',
    },
    secondary: {
      main: '#FFC355',
      light: '#FFE0A6',
      dark: '#DC910B',

    },
    tertiary: {
      main: '#FA535F',
      light: '#FDA5AB',
      dark: '#D60B1A',
    },
    error: {
      main: '#DC004E',
    },
    warning: {
      main: '#FFC355',
    },
    info: {
      main: '#61CCC0',
    },
    success: {
      main: '#07887B',
    },
    background: {
      default: '#F5F5F5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Arsenal SC, sans-serif',
    h1: {
      fontFamily: 'Anton SC, sans-serif',
    },
    h2: {
      fontFamily: 'Anton SC, sans-serif',
    },
    h3: {
      fontFamily: 'Anton SC, sans-serif',
    },
    h4: {
      fontFamily: 'Anton SC, sans-serif',
    },
    h5: {
      fontFamily: 'Anton SC, sans-serif',
    },
    h6: {
      fontFamily: 'Anton SC, sans-serif',
    },
  },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/sports/schedule/:league" element={<SportsSchedule />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
