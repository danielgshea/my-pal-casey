import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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