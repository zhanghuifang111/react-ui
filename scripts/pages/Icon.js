import React from "react";

class IconPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>图标</h1>
				<div className="example">
					<h4>Example</h4>
					<p>支持 <a href="http://fontawesome.io/icons/">font-awesome</a></p>
					<div className="example icon-16">
						<i className="fa fa-heart-o"></i>
						<i className="fa fa-paper-plane"></i>
						<i className="fa fa-tag"></i>
						<i className="fa fa-tree"></i>
						<i className="fa fa-exclamation-triangle"></i>
						<i className="fa fa-user"></i>
					</div>
					<div className="example icon-24">
						<i className="fa fa-heart-o"></i>
						<i className="fa fa-paper-plane"></i>
						<i className="fa fa-tag"></i>
						<i className="fa fa-tree"></i>
						<i className="fa fa-exclamation-triangle"></i>
						<i className="fa fa-user"></i>
					</div>
					
				</div>
				
			</div>
		);
	}
}

module.exports = IconPage;