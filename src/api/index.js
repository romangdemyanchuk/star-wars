import * as axios from "axios";


const baseURL = "https://swapi.dev/api/";

const instance = axios.create({ baseURL });


export const getPeople = (page) => {
    return instance.get(`people/?page=${page}`);
};

export const getDetail = (id) => {
    return instance.get(`people/${id}`);
};

export const SearchedItemsInfo =  (term) => {
    return instance.get(`people/?search=${term}`);
}
