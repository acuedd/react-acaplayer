import { type } from "@testing-library/user-event/dist/type"

export const selectSong = (song) => {
    return {
        type: "SONG_SELECTED",
        payload: song,
    }
}

export const selectSongById = (id) => {
    return {
        type: "SONG_SELECTED_BY_ID",
        payload: id,
    }
}

export const setPlayerState = (val) => {
    return {
        type: "PLAYER_STATE_SELECTED",
        payload: val,
    }
}

export const setVolume = (val) => {
    return {
        type: "SET_VOLUME",
        payload: val,
    }
}

export const setDuration = (val) => {
    return {
        type: "SET_VOLUME",
        payload: val,
    }
}

export const setCurrentLocation = (val) => {
    return {
        type: "SET_CURRENT_LOCATION",
        payload: val,
    }
}

export const LOAD_IN_PROGRESS = "LOAD_IN_PROGRESS";
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

export const loadInProgress = () => ({
    type: LOAD_IN_PROGRESS,
});

export const loadSuccess = songs => ({
    type: LOAD_SUCCESS,
    payload: { songs },
});

export const loadFailure = () => ({
    type: LOAD_FAILURE,
});