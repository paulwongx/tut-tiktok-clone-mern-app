import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tut-tiktok-clone-mern.herokuapp.com/'
});

export default instance;