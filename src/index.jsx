import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountProvider } from './utils/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CountProvider>
        <App />
    </CountProvider>
);
