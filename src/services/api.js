import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance('/users');

const getUserPosts = (id) => axiosInstance('/users/'+ id+'/posts');


export {getUsers,getUserPosts};
//
// const getPost = (id) => axiosInstance('/posts?userId=' + id);

