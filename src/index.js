import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/Layout/App";

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';

const store = configureStore();
const persistor = persistStore(store);

const rooty = () => {
    return (
        <Provider store={store} >
            <PersistGate
                loading={<div>Loading...</div>}
                persistor={persistor}
            >
                <App />
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render(rooty(), document.getElementById("root"));