import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance('/users');
const getPosts = () => axiosInstance('/posts');
const getComments = () => axiosInstance('/comments');
const getAlbums = () => axiosInstance('/albums');
const getPhotos = () => axiosInstance('/photos');
const getTodos = () => axiosInstance('/todos');

export {getUsers, getPosts, getComments, getAlbums, getPhotos, getTodos};
//
// const getPost = (id) => axiosInstance('/posts?userId=' + id);
