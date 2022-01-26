import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';
const PrivateRoute = ({ component: Component, ...rest }) => (
  //localStorage.getItem('token')
  <Route
    // eslint-disable-next-line
    {...rest}
    render={props =>
       true ?
        (
          // eslint-disable-next-line
          <Component {...props} />
        )
        : (<Redirect to={{
          pathname: '/login/'
        }} />)
    } />
)
PrivateRoute.propTypes = {
  component: func.isRequired
}
export default PrivateRoute;