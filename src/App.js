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
