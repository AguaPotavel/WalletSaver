import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/theme'
import ModalProvider from './context/ModalContext'

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
