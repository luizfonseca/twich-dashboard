

require('../less/main.less');
require('./functions.jsx');

'use strict';

import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, hashHistory } from 'react-router'
import { RouteTransition } from 'react-router-transition'
import { initializeTwitch, loginTwitch } from './functions.jsx'

const {Grid, Row, Col} = require('react-flexbox-grid')




const mainContainer = document.querySelector("#content");


const Auth = React.createClass({
	render(){}
})


// Initial Page
const Index = React.createClass({
	componentWillMount() {
		initializeTwitch();
	},

	render() {
		return (
			<Grid>
				<Row>
					<Col lg={6} xs={6} sm={6}>
						<Row center="sm">
							<img src={require('../assets/images/twitchlogo.png')} />

							<Link to="dashboard" className="active">Go to Dashboard</Link>
						</Row>
					</Col>
				</Row>
			</Grid>
		)
		
	}

})

// Dashboard Page
const Dashboard = React.createClass({
	render() {
		return (
			<div className="dash">Dashboard
				<Link to="/" className="active">Go back</Link>

		  </div>
		)
	}
})


render(
	(
		<Router history={hashHistory}>
				<Route path="/" component={Index}></Route>
				<Route path="auth" component={Auth}></Route>
				<Route path="dashboard" component={Dashboard}></Route>

		</Router>

	), mainContainer
)