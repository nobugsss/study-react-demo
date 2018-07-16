import React, {Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux";
import LoginPage from '@/views/login/loginPage.jsx'

class Home extends Component {
		render() {
			return (
				<div className="unauthorized-layout">
					<Switch>
						<Route path="/auth/login" component={LoginPage} />
						<Redirect to="/auth/login" />
					</Switch>
				</div>
			);
		}
}

export default connect(state => state)(Home);
