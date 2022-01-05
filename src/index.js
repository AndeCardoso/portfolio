import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { GlobalCss } from './GlobalCss';
import Layout from './components/layout';

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: '150px',
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout />
      <GlobalCss />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
