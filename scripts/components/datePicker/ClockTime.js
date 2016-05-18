var React = require('react');
var classNames = require('classnames');

var ClockTime = React.createClass({
	showDialSelf:function(value){	
		this.props.showDialSelf(value);
	},
	add:function(stage){
		this.props.add(stage);
	},
	decrease:function(stage){
		this.props.decrease(stage);
	},
	render: function() {
		var clockTimeClass = classNames(
				'clock-time',
				{
					'clock-time-whole':this.props.whole === true
				}
			);
		return (
			<div className={clockTimeClass}>
				<div className="clock-time-input"  onClick={this.showDialSelf.bind(this,"hour")}>
					<span>{this.props.hour}</span>
					<i className="fa fa-angle-up" onClick={this.add.bind(this,"hour")}></i>
					<i className="fa fa-angle-down" onClick={this.decrease.bind(this,"hour")}></i>
				</div>
				<div className="clock-time-input"  onClick={this.showDialSelf.bind(this,"minute")}>
					<span>{this.props.minute}</span>
					<i className="fa fa-angle-up" onClick={this.add.bind(this,"minute")}></i>
					<i className="fa fa-angle-down" onClick={this.decrease.bind(this,"minute")}></i>
				</div>
				<div className="clock-time-input"  onClick={this.showDialSelf.bind(this,"second")}>
					<span>{this.props.second}</span>
					<i className="fa fa-angle-up" onClick={this.add.bind(this,"second")}></i>
					<i className="fa fa-angle-down" onClick={this.decrease.bind(this,"second")}></i>
				</div>
			</div>
		);
	}
});

module.exports = ClockTime;