import * as axios from "axios";


const baseURL = "https://swapi.dev/api/";

const instance = axios.create({ baseURL });



export const userAuth = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
};

export const userLogin = (data) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email: data.email, password: data.password})
};

export const getPeople = (page) => {
    return instance.get(`people/?page=${page}`);
};

export const getDetail = (id) => {
    return instance.get(`people/${id}`);
};

export const SearchedItemsInfo =  (term) => {
    return instance.get(`people/?search=${term}`);
}
