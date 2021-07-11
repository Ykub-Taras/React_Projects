import {BrowserRouter as Router} from 'react-router-dom';

export default function User({userDataBlock: {id, name}}) {
    return (
        <Router>
            <div>
                {id}.{name}

            </div>
        </Router>
    );
}
