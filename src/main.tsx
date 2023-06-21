import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <FluentProvider theme={webDarkTheme}>
        <App />
      </FluentProvider>
    </React.StrictMode>
  );
