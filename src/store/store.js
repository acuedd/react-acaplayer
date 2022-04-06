import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    songsReducer, selectedSongIdReducer, playerStateReducer, loadSongsReducer,
    volumeReducer, durationReducer, currentLocationReducer, isLoading
} from '../reducers/reducers';

const reducers = {
    //songs: songsReducer,
    selectedSongId: selectedSongIdReducer,
    playerState: playerStateReducer,
    volume: volumeReducer,
    duration: durationReducer,
    currentLocation: currentLocationReducer,
    listSongs: loadSongsReducer,
    isLoading: isLoading,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
    createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
