import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./SongList.css";
//import { getLoading, getSongs } from '../../reducers/selectors';
import SongItem from "./SongItem";
import { loadSongs } from '../../reducers/thunks';
import SongListHeader from "../Player/SongListHeader";

const SongList = ({ listSongs, isLoading, startLoading }) => {

    const loadingMessage = <div>Loading songs...</div>;
    let songTags;


    if (listSongs.length > 0) {
        //console.log(listSongs, "song list")
        songTags = listSongs.map((song, index) => {
            //console.log(index, song)
            return <SongItem song={song} key={index} index={index} />;
        });
    }

    //console.log(listSongs, isLoading);
    function SearchList() {
        return (
            isLoading ? loadingMessage : songTags
        );
    }
    return (
        <div id="song-list">{SearchList()}</div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    //listSongs: state.listSongs,
});

const mapDispatchToProps = dispatch => ({
    startLoading: () => dispatch(loadSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
