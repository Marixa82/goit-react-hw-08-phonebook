import React from 'react';
import { HOME_ROUTE } from 'constants/route';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            Error 404. Sorry, page wasn`t found.{' '}
            <Link to={HOME_ROUTE}>Back to the Home page.</Link>
        </div>
    )
}

export default NotFound;
