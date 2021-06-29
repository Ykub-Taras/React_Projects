import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
function App() {
    return (
        <Router>
            <div>
                <Link to={'/Users'}>Users</Link>
                <br/>
                <Link to={'/Posts'}>Posts</Link>
                <br/>
                <Link to={'/Comments'}>Comments</Link>
                <Switch>
                    {/*<Route exact path={'/Users'}>#</Route>*/}
                    <Route exact path={'/Users'} render={() => <Users/>}/>
                    <Route exact path={'/Posts'} render={() => <Posts/>}/>
                    <Route exact path={'/Comments'} render={() => <Comments/>}/>
                </Switch>
            </div>
        </Router>);
}
export default App;

//-----------------------------------------------------
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//
// function App() {
//     return (
//         <Router>
//             <div>
//                 <Link to={'/'}>#</Link>
//                 <Switch>
//                     <Route exact path={'/'}>#</Route>
//                     <Route exact path={'/'} render={() => value}/>
//                 </Switch>
//             </div>
//         </Router>);
// }
// export default App;
//-----------------------------------------------------



// import './App.css';
// import Posts from "./components/posts/Posts";
// import Users from "./components/users/Users";
// import Comments from "./components/comments/Comments";
//
// import {   useEffect, useState} from "react";
// import {     getUsers, getComments, getPost } from "./services/api";
//
// export default function App()
// {
//     let [users, setUsers] = useState([]);
//     let [posts, setPosts] = useState([]);
//     let [comments, setComments] = useState([]);
//     useEffect(() => {
//         getUsers().then(response => {
//             setUsers(response.data)
//         });
//     }, []);
//
//     function postsInfo(postsInfo) {
//         getPost(postsInfo).then(value => {
//             setPosts(value.data);
//         });
//     }
//
//     function commentsInfo(commentsInfo) {
//         getComments(commentsInfo).then(value => {
//                 setComments(value.data)
//             }
//         );
//     }
//
//     let stylePosts = JSON.parse(localStorage.getItem("stylePosts"));
//     let styleComments = JSON.parse(localStorage.getItem("styleComments"));
//     return (
//         <div>
//             <Users usersDataBlock={users} postsInfo={postsInfo} posts={posts}/>
//             <hr/>
//             {posts && <Posts postsDataBlock={posts} commentsInfo={commentsInfo} stylePosts={stylePosts}/>}
//             {comments && <Comments comments={comments} styleComments={styleComments}/>}
//         </div>
//     );
// }