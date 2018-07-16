import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AuthorizedRoute extends React.Component {

  componentWillMount() {
    // getLoggedUser()
  }

  render() {
    // debugger
    const { component: Component, loginStatus, ...rest } = this.props
    
    return (
      <Route {...rest} render={props => {
        return loginStatus.login
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}

// const stateToProps = ({ loggedUserState }) => ({
//   pending: loggedUserState.pending,
//   logged: loggedUserState.logged
// })

export default connect(state => state)(AuthorizedRoute)
