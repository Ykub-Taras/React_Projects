import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UsersPosts from "./UsersPosts";

export default function User({userDataBlock: {id, name}}) {
    return (
        <Router>
            <div>
                {id}.{name} - <Link to={'/all_user_posts'}>All posts of user</Link>
                <Switch>
                    <Route exact path={'/all_user_posts'} render={() => <UsersPosts id={id}/>}/>
                </Switch>
            </div>
        </Router>
    );
}
