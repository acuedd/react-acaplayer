import axios from "axios";

const URL = process.env.REACT_APP_DOMAIN || 'https://pokeapi.co/api/v2';

//console.log(process.env.REACT_APP_DOMAIN)
const axiosInstance = axios.create({
    baseURL: URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
        'mode': ''
    }
});

export default axiosInstance;