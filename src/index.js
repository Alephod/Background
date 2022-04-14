import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ModalProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </ModalProvider>
        </HashRouter>
    </React.StrictMode>,
    document.querySelector('#root')
);
