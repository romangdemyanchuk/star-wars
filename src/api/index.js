import * as axios from "axios";


const baseURL = "https://swapi.dev/api/";

const baseAuthURL = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({ baseURL });


export const userAuth = () => {
    return axios.get(`${baseAuthURL}auth/me`, {withCredentials: true})
};

export const userLogin = data => {
    const {email, password} = data
    return axios.post(`${baseAuthURL}auth/login`, {email, password})
};

export const getPeople = page => {
    return instance.get(`people/?page=${page}`);
};

export const getDetailOfPerson = id => {
    return instance.get(`people/${id}`);
};

export const searchedPeopleInfo = term => {
    return instance.get(`people/?search=${term}`);
}
