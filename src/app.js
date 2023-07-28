import {BrowserRouter as Router, Switch, Route, link} from 'react-router-dom'

import './main/app.jsx'
import './main/app.css'


function App() {
    return (
        <Router>
            <ul>
                <li>
                    <link to=''>Home</link>
                </li>
            </ul>
        </Router>
    )
}