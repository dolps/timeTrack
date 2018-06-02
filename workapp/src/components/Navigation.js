import React from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li><Link to={routes.LOGIN_ROUTE}>Sign In</Link></li>
        </ul>
    </div>);

export default Navigation;
