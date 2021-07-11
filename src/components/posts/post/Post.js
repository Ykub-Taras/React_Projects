import {BrowserRouter as Router} from 'react-router-dom';

export default function Post({postDataBlock: {id, title}}) {
    return (
        <Router>
            <div>
                {id}.{title}
            </div>
        </Router>
    );
}
