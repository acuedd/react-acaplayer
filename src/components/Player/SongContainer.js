import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadSongs } from '../../reducers/thunks';
import {
    loadSuccess
} from '../../actions';
import SongList from './SongList';
import SongListHeader from './SongListHeader';
import './SongContainer.css';

const SongContainer = ({ listSongs, isLoading, startLoading, filterSuccess }) => {
    const [searchField, setSearchfield] = useState("");
    const [searchShow, setSearchShow] = useState(false);

    useEffect(() => {
        startLoading();
    }, []);

    let filteredSongs = listSongs;
    if (listSongs.length > 0) {
        filteredSongs = listSongs.filter(
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
                    ||
                    song
                        .collection
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                )
            }
        );
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

    return (
        <div className='song-container'>
            <div className='center song-search-div' >
                <input
                    className='search'
                    type="search"
                    placeholder="Busca por nombre de canción, autor o álbum"
                    onChange={handleChange}
                />
            </div>
            <SongListHeader />
            <SongList listSongs={filteredSongs} />
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    listSongs: state.listSongs,
});

const mapDispatchToProps = dispatch => ({
    startLoading: () => dispatch(loadSongs()),
    filterSuccess: (allsongs) => dispatch(loadSuccess(allsongs))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongContainer);
