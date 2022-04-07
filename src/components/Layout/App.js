import React from 'react';
import "./App.css";
import NavBar from './NavBar';
import SongList from "../Player/SongList";
import SongDetail from "../Player/SongDetail";

import Player from '../Player/Player';
import SongContainer from '../Player/SongContainer';
import SongListHeader from '../Player/SongListHeader';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <SongDetail />
            <SongContainer />
            <Player />
            <a href='#focused' id='focus-link' hidden>
                Go to playing element
            </a>
        </React.Fragment>
    );
};

export default App;