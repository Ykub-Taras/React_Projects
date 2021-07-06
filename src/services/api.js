import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/'+ id);
const getPosts = () => axiosInstance('/posts');
const getPost = (id) => axiosInstance('/posts/'+ id);
const getComments = () => axiosInstance('/comments');
const getComment = (id) => axiosInstance('/comments/'+id);

export {getUsers,getUser, getPosts, getPost, getComments, getComment};
//
// const getPost = (id) => axiosInstance('/posts?userId=' + id);
