import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getPosts = () => axiosInstance('/posts');
const getUsers = () => axiosInstance('/users');
const getComments = () => axiosInstance('/comments');
const getPost = (id) => axiosInstance('/users/' + id + '/posts');
const getComment = (id) => axiosInstance('posts/' + id + '/comments');

export {getPosts, getPost, getUsers, getComments, getComment};
//
// const getPost = (id) => axiosInstance('/posts?userId=' + id);
