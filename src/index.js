import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider, ModalContext } from './context/ModalContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <ModalContext.Consumer>
                    {context => (
                        <App context={context} />
                    )}
                </ModalContext.Consumer>
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
);
