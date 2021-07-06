import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PostDetails from "./PostDetails";

export default function Post({postDataBlock: {id, title}}) {
    return (
        <Router>
            <div>
                {id}.{title} - <Link to={'/postsDetails'}>Post Details</Link>
                <Switch>
                    <Route exact path={'/postsDetails'} render={() => <PostDetails id={id}/>}/>
                </Switch>
            </div>
        </Router>
    );
}
