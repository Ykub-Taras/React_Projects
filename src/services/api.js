import axios from "axios";

let  axiosInstance =  axios.create({baseURL: 'http://localhost:8888'});

const  getTodos = () => axiosInstance.get('/get-todos')
const getTodosByID = (id) => axiosInstance.get('/get-todos:' + id)
const createTodo = ({body}, {headers}) => axiosInstance.post('/create-todo', body, headers)
const editTodoByID = (id) => axiosInstance.patch('/update-todo/:' + id)
const deleteTodoByID = (id) => axiosInstance.delete('/delete-todo/:' + id)

export {getTodos, getTodosByID, createTodo, editTodoByID, deleteTodoByID}
