require('../less/main.less')
require('./functions.jsx')



import React from "react";
import { render } from "react-dom";

const { Grid, Row, Col } = require('react-flexbox-grid')

import { Router, Route, Link, hashHistory } from 'react-router'




'use strict';

import { loginTwitch, saveToken, getSavedToken, getUserChannelData } from './functions.jsx'
import TopLayout from './layout.jsx'

const mainContainer = document.querySelector("#content");

Twitch.events.addListener('auth.login', function(status) {
   //console.log(status)

   const ActiveToken = Twitch.getToken()
   saveToken(ActiveToken)
   getSavedToken()


});	



const Auth = React.createClass({
	render(){}
})


// Initial Page
const Index = React.createClass({
	componentWillMount() {
		loginTwitch();
	},

	render() {
		return (
			<Grid>
				<Row>
					<Col lg={12} xs={12} sm={12}>
						<Row center="sm">
							<Col lg={6} xs={6} sm={6}>

								<div className="loadingIcon">
									<h3> Authenticating you on Twitch... </h3>
									<img src={require('../assets/images/loading.svg')} />
								</div>
							</Col>
						</Row>
					</Col>
				</Row>

			</Grid>
		)
		
	}

})

// Dashboard Page
const Dashboard = React.createClass({
  getInitialState: function () {
  	return {}
  },

 	componentWillReceiveProps(nextProps) {

 		var self = this;
		Twitch.api({ method: 'channel'}, function(error, channel){
			self.setState(channel)
		})
 	},

 	componentWillUpdate(nextProps, nextState) {

 	},

	componentWillMount() {
		console.log(TwitchToken);
	},


	render() {
		return (
			<div>
				<TopLayout username={this.state.display_name} avatar={this.state.logo}/>

					<div className="dash">Dashboard
						<Link to="/" className="active">Go back {TwitchToken}</Link>
			  	</div>
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