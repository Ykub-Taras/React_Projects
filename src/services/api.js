import axios from "axios";

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getAllPosts = () => axiosInstance('/posts');
const getPosts = (id) => axiosInstance('/posts/' + id);

export {getAllPosts, getPosts};

// const getPost = (id) => axiosInstance('/posts?userId=' + id);
