import React from 'react';
import ReactDOM from 'react-dom';
import { ResetCss } from './ResetCss';
import Layout from './components/layout';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <ResetCss />
  </React.StrictMode>,
  document.getElementById('root')
);
