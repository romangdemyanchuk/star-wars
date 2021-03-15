import * as axios from "axios";


const baseURL = "https://swapi.dev/api/";

const baseAuthURL = "https://test-for-roman.herokuapp.com/api/auth/";

const instance = axios.create({ baseURL });

export const userLogin = (data) => {
    return axios.post(`${baseAuthURL}login`, data)
};

export const userRegister = (data) => {
    return axios.post(`${baseAuthURL}register`, data)
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
