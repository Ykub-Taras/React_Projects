import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
export default function App () {
    return (
        <Router>
            <div>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/posts'}>Posts</Link>
                <br/>
                <Link to={'/comments'}>Comments</Link>
                <hr/>
                <Switch>
                    {/*<Route exact path={'/users'}>#</Route>*/}
                    <Route exact path={'/users'} render={() => <Users/>}/>
                    <Route exact path={'/posts'} render={() => <Posts/>}/>
                    <Route exact path={'/comments'} render={() => <Comments/>}/>
                </Switch>
            </div>
        </Router>)
}
