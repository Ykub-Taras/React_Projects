import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function User({userDataBlock: {id, name}}) {
    return (
        <Router>
            <div>
                {id}.{name}

            </div>
        </Router>
    );
}
