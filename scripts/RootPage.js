import React from "react";
import Header from './Header';
import LeftNav from './LeftNav';

class RootPage extends React.Component {
	render(){
		return (
			<div className="indexpage">
				<div className="app">
					<Header />
					<div className="body">
						<LeftNav />
						<div className="rightContent">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = RootPage;