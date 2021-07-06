import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserDetails from "./UserDetails";

export default function User({userDataBlock: {id, name}}) {
    return (
        <Router>
            <div>
                {id}.{name} - <Link to={'/usersDetails'}>User Details</Link>
                <Switch>
                    <Route exact path={'/usersDetails'} render={() => <UserDetails id={id}/>}/>
                </Switch>
            </div>
        </Router>
    );
}
