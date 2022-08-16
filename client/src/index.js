import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataProvider from './redux/store/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <DataProvider>
        <App />
    </DataProvider>
);
