import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from "./components/users/Users";

export default function App () {
    return (
        <Router>
            <div>
                <Link to={'/users'}>Users</Link>
                <br/>
                <hr/>
                <Switch>
                    <Route exact path={'/users'} render={() => <Users/>}/>
                </Switch>
            </div>
        </Router>)
}
