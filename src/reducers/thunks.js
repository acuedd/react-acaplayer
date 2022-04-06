import {
    loadInProgress, loadSuccess, loadFailure
} from '../actions';
import axios from '../services/axios';
//import axios from 'axios';
const URL = `/webservice.php?o=b6009cea-0500-11eb-b265-0242ac130002&m=am&f=json&t=`;

export const loadSongs = () => async dispatch => {
    try {
        dispatch(loadInProgress());

        /*let response = await axios.get(`&random_sort=true`);
        console.log(response)
        const songs = await response.json();
        console.log(songs)*/

        var myHeaders = new Headers();
        //myHeaders.append("Content-Type", "application/json");
        //myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000")
        //myHeaders.append("mode", 'no-cors');

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch(URL, requestOptions)
        //let response = await axios.post(URL + "&random_sort=true");
        //console.log(response);
        const objResponse = await response.json();
        //console.log(objResponse)
        if (objResponse.valido === 1) {
            let songs = [];
            const endpoint = process.env.REACT_APP_DOMAIN;
            //console.log(objResponse.resources);
            objResponse.resources.map((song, index) => {
                songs.push({
                    "name": song.title_resource,
                    "author": song.fullname,
                    "collection": song.name_collection,
                    "url": (song.URLPath != "") ? song.URLPath : `${endpoint}/${song.path}`,
                    "id": index,
                    "links": {
                        "images": [
                            {
                                "url": `${endpoint}/${song.path_image}`,
                            },
                            {
                                "url": `${endpoint}/${song.path_image}`,
                            }
                        ]
                    }
                })
            });
            //console.log(songs.length)
            dispatch(loadSuccess(songs));
        }
        else {
            dispatch(loadFailure());
            dispatch(displayAlert(objResponse.razon));
        }

        //dispatch(loadSuccess(songs));
    }
    catch (e) {
        dispatch(loadFailure());
        dispatch(displayAlert(e));
    }
};

export const displayAlert = text => () => {
    alert(text);
};