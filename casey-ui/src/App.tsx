/**
 * App.tsx
 * 
 * This file contains the main App component.
 * The App component is the root component of the app.
 * It provides the AppContext to the app and sets up the routing.
 */

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProvider } from './AppContext';
import CaseyRouter from './routing/CaseyRouter';
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }
}

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CaseyRouter />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
