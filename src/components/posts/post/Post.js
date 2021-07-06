import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Post({postDataBlock: {id, title}}) {
    return (
        <Router>
            <div>
                {id}.{title}
            </div>
        </Router>
    );
}
