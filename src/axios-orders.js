import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-21fb8.firebaseio.com/'
});

export default instance;