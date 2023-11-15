import React from 'react';
import { HOME_ROUTE } from 'constants/route';
import { Link } from 'react-router-dom';
import { Div } from './views.styled';

export const NotFound = () => {
    // return <div>404 - Not Found</div>;
    return (
        <Div>
            Error 404. Sorry, page wasn`t found.{' '}
            <Link to={HOME_ROUTE}>Back to the Home page.</Link>
        </Div>
    )
}
// console.log(NotFound)

