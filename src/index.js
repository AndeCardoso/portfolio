import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalCss } from './GlobalCss';
import Layout from './components/layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <GlobalCss />
  </React.StrictMode>,
  document.getElementById('root')
);
