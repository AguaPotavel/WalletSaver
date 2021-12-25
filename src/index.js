import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/toast-custom.css'
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);
