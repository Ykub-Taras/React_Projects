import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import CommentDetails from "./CommentDetails";

export default function User({commentDataBlock: {postId, name}}) {
    return (
        <Router>
            <div>
                {postId}.{name} - <Link to={'/commentDetails'}>Comment Details</Link>
                <Switch>
                    <Route exact path={'/commentDetails'} render={() => <CommentDetails id={postId}/>}/>
                </Switch>
            </div>
        </Router>
    );
}
