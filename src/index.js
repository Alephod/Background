import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
);
