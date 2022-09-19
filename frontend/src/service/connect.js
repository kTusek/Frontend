import $router from '@/router';
import axios from 'axios';

let Service = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000
})

Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            console.error('Interceptor', error.response)
        }
    }
);

let Auth = {
    async signUp(userData) {
        let post = await Service.post('/user', userData);
        return post
    },
}

export  { Auth }