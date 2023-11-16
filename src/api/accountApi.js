import axios from "axios";
const BASE_URL = 'https://example.com/api/accounts';

const api = axios.create({
    baseURL : BASE_URL,
    headers : {
        'Content-Type' : 'application/json',
    }
})

export const getAccounts = () => api.get('/');