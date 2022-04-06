import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import "./SongList.css";
//import { getLoading, getSongs } from '../../reducers/selectors';
import SongItem from "./SongItem";
import { loadSongs } from '../../reducers/thunks';
import SongListHeader from "../Player/SongListHeader";

const SongList = ({ listSongs, isLoading, startLoading }) => {
    const [searchField, setSearchfield] = useState("");
    const [searchShow, setSearchShow] = useState(false);


    useEffect(() => {
        startLoading();
    }, []);

    const loadingMessage = <div>Loading songs...</div>;
    let songTags;


    if (listSongs.length > 0) {
        const filteredSongs = listSongs.filter(
            song => {
                return (
                    song
                        .name
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                    ||
                    song
                        .author
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                )
            }
        );
        //console.log(listSongs)
        songTags = filteredSongs.map((song, index) => {
            //console.log(index, song)
            return <SongItem song={song} key={index} index={index} />;
        });
    }

    const handleChange = e => {
        setSearchfield(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false);
        }
        else {
            setSearchShow(true);
        }
    }

    //console.log(listSongs, isLoading);
    function SearchList() {
        return (
            isLoading ? loadingMessage : songTags
        );
    }
    return (
        <div id="song-list">
            <div className='center' >
                <input
                    className='search'
                    type="search"
                    placeholder="Search song"
                    onChange={handleChange}
                />
            </div>
            <SongListHeader />
            {SearchList()}
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    listSongs: state.listSongs,
});

const mapDispatchToProps = dispatch => ({
    startLoading: () => dispatch(loadSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
