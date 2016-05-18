var React = require("react");
var Calendar = require("./Calendar");
var Clock = require("./Clock");

var DateClockTime = React.createClass({
	getInitialState: function() {
		return {
			clockShow:false 
		};
	},
	clockChange:function(status){
		this.setState({
			clockShow:status
		});
	},
	render:function(){
		
		return(
			<div>
				<Calendar 
					value={this.props.value} 
					onChange={this.props.onChange} 
					whole={true}
					clockShow={this.state.clockShow}
				/>
				<Clock 
					value={this.props.value} 
					onChange={this.props.onChange} 
					whole={true}
					clockShow={this.state.clockShow}
					clockChange={this.clockChange}
				/>
			</div>
		);
	}

});

module.exports = DateClockTime;