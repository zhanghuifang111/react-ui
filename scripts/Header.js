import React from 'react';

const Header = React.createClass({
	transferUrl:function(url){
		this.props.transferUrl(url);
	},
	render:function(){

		return ( 
			<div className="header" style={{color:'#fff',fontSize:'24px',paddingLeft:'16px',lineHeight:'50px'}}>
				RKAct UI
			</div>
		);
	}
});

export default Header;