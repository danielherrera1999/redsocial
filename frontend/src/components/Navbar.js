import React , {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){

        return(
            <React.Fragment>
                <ul>
                    <li><Link to="/">login</Link></li>
                    <li><Link to="/users">Usuarios</Link></li>
                </ul>
            </React.Fragment>
        );
    }
} 