import React, {Component, PropTypes} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

class PrivateRoute extends Component {

  render ()  {
    return (
    <div>
      <Route exact path={this.props.path} render={() => (
        this.props.auth_status.signed_in ? (
          React.createElement(this.props.component, {auth_status: this.props.auth_status.signed_in})
        ) : (
          <Redirect to={{
            pathname: this.props.authPath,
            state: { from: this.props.path}
          }}/>
        )
      )}/>
    </div>
    )
  }
}
PrivateRoute.defaultProps = {
  authPath:'/auth/sign_in'
}

PrivateRoute.propTypes = {
  auth_status:PropTypes.any.isRequired,
  component:PropTypes.any.isRequired,
  path:PropTypes.any.isRequired,
  authPath:PropTypes.any,
};


export default PrivateRoute;
