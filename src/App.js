import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Routes from "./components/component_depot/Routes";
import NavMenu from "./components/component_depot/NavMenu";


export default function App() {

    return (
        <div>
            <Router>
                <NavMenu/>
                <hr/>
                <Routes/>
            </Router>
        </div>
    )
}