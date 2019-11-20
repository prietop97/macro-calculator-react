import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

import { Provider } from "react-redux"
import { store , persistor } from "./Redux/store"

import { PersistGate } from 'redux-persist/integration/react'

render(
    <Router>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </Router>
, document.getElementById('root'));
