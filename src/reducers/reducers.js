import { combineReducers } from "redux";
import { LOAD_FAILURE, LOAD_SUCCESS, LOAD_IN_PROGRESS } from "../actions";
import songs from "../data/songs.json";

export const songsReducer = () => {
    return songs;
};

export const selectedSongIdReducer = (selectedSongId = 0, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload.id;
    }
    if (action.type === "SONG_SELECTED_BY_ID") {
        return action.payload;
    }
    return selectedSongId;
};

export const playerStateReducer = (playerState = 0, action) => {
    if (action.type === "PLAYER_STATE_SELECTED" && !action.payload) {
        return (playerState + 1) % 2;
    } else if (action.type === "PLAYER_STATE_SELECTED" && action.payload) {
        return action.payload;
    }
    return playerState;
};

export const volumeReducer = (volume = 100, action) => {
    if (action.type === "SET_VOLUME") {
        return action.payload;
    }
    return volume;
};

export const durationReducer = (duration = 0, action) => {
    if (action.type === "SET_DURATION") {
        return action.payload;
    }
    return duration;
};

export const currentLocationReducer = (loc = 0, action) => {
    if (action.type === "SET_CURRENT_LOCATION") {
        return action.payload;
    }
    return loc;
};

export const loadSongsReducer = (state = songs, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_IN_PROGRESS: {
            return {
                ...state,
            }
        }
        case LOAD_SUCCESS: {
            const { songs } = payload;
            return songs;
        }
        case LOAD_FAILURE: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_IN_PROGRESS:
            return true;
        case LOAD_SUCCESS:
        case LOAD_FAILURE:
            return false;
        default:
            return state;
    }
}

