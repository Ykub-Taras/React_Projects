import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance('/users');

const getUser = (id) => axiosInstance('/users/' + id);

export {getUsers, getUser};