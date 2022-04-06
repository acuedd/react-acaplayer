import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/Layout/App";

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const store = configureStore();
const persistor = persistStore(store);

const rooty = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCuRCfcBYjI95wufuuqMDhwd-o7p41B3f4",
        authDomain: "acapellamusic-f33b7.firebaseapp.com",
        projectId: "acapellamusic-f33b7",
        storageBucket: "acapellamusic-f33b7.appspot.com",
        messagingSenderId: "108403745549",
        appId: "1:108403745549:web:6c39d338429d264953c644",
        measurementId: "G-5L2Y7LPXZV"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

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