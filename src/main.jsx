import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//limaste todas mis tristezas al volver

//? Fuentes Roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme_palette = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#b4a03a',
    },
    secondary: {
      main: '#9c5800',
      contrastText: '#9e6600',
    },
    background: {
      default: '#f1eee1',
    },
    text: {
      primary: '#9e6600',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme_palette}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
