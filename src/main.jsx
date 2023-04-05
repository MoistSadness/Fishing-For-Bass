import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';

/** Theme might get moved to it's own config file if it gets too large */
const theme = createTheme({
  palette: {
    primary: {

    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
