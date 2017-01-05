// React layout for the entire app
import React from "react";
const { Grid, Row, Col } = require('react-flexbox-grid')

export default class TopLayout extends React.Component {
	render() { 
		return (
			<Grid>
				<Row>
					<Col lg={3} sm={3}>
						<div className="avatarImage">
							<img src={this.props.avatar}/>						

							<div>
								<h4>{this.props.username}</h4>
							</div>
						</div>


					</Col>
				</Row>
			</Grid>
		)
	}

}
