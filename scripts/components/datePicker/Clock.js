var React = require('react');
var classNames = require('classnames');
var poslist = require('../../utils/Circle.js')(12,50,-90);
var ClockTime = require('./ClockTime');
var Clock = React.createClass({
	componentWillReceiveProps : function(nextProps) {

    	if (nextProps.value !== this.props.value) {
    		this.setState({
    			value :nextProps.value
    		});
    	}
  	},
  	componentDidMount: function() {
  		if(this.props.whole){
  			this.setState({
  				clockShow:this.props.clockShow
  			});
  		}
  	},
	getInitialState: function() {
		var date = new Date(this.props.value);
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var timeState = (hour >= 12) ? "pm" : "am";
		return {
			stage:'hour',
			hour:hour,
			minute:minute,
			second:second,
			timeState: timeState,
			value:this.props.value
		};
	},
	transferValue:function(value){
		this.props.onChange(new Date(this.state.value).toLocaleDateString() + " "+ value);
	},
	hourLimit:function(hour){
		//console.log("limit " + hour);
		if(this.state.timeState==="pm"){
			if(hour>23){
				return 12;
			}else if(hour<12){
				return 23;
			}else{
				return hour;
			}
			
		}else{
			if(hour>11){
				return 0;
			}else if(hour<0){
				return 11;
			}else{
				return hour;
			}
		}
	},
	sixtyLimit:function(value){
		//console.log("limit " + value);
		if(value>59){
			return 0;
		}else if(value<0){
			return 59;
		}else{
			return value;
		}
	},
	add:function(stage){
		
		switch(stage) {
			case 'hour':
				var hour = this.hourLimit(this.state.hour+1);
				this.setState({
					hour:hour
				});
				this.transferValue(hour+":"+this.state.minute+":"+this.state.second);
				break;
			case 'minute':
				var minute = this.sixtyLimit(this.state.minute+1);
				this.setState({
					minute:minute
				});
				this.transferValue(this.state.hour+":"+minute+":"+this.state.second);
				break;
			case 'second':
				var second = this.sixtyLimit(this.state.second+1);
				this.setState({
					second:second
				});
				this.transferValue(this.state.hour+":"+this.state.minute+":"+second);
				break;
		}
	},
	decrease:function(stage){
		switch(stage) {
			case 'hour':
			//console.log(this.hourLimit(this.state.hour+1));
				var hour = this.hourLimit(this.state.hour-1);
				this.setState({
					hour:hour
				});
				this.transferValue(hour+":"+this.state.minute+":"+this.state.second);
				break;
			case 'minute':
				var minute = this.sixtyLimit(this.state.minute-1);
				this.setState({
					minute:minute
				});
				this.transferValue(this.state.hour+":"+minute+":"+this.state.second);
				break;
			case 'second':
				var second = this.sixtyLimit(this.state.second-1);
				this.setState({
					second:second
				});
				this.transferValue(this.state.hour+":"+this.state.minute+":"+second);
				break;
		}
	},
	clickItem:function(num){
		
		switch(this.state.stage) {
			case 'hour':
				this.setState({
					hour:num,
				});
				
				this.transferValue(num+":"+this.state.minute+":"+this.state.second);
				break;
			case 'minute':
				this.setState({
					minute:num
				});
				this.transferValue(this.state.hour+":"+num+":"+this.state.second);
				break;
			case 'second':
				this.setState({
					second:num
				});
				this.transferValue(this.state.hour+":"+this.state.minute+":"+num);
				break;
		}
	},
	showDiaByTimeState:function(timeState,e){
		e.preventDefault();
		var hour = this.state.hour;
		if(timeState === "am"){
			if(hour-12>=0){
				hour -= 12;
			}
			
			hour: hour
		}else if(timeState === "pm"){
			if(hour + 12 <=23){
				hour += 12;
			}
			hour:hour
		}else{
			console.error("数据错误");
		}
		this.setState({
			timeState:timeState,
			hour:hour
		});
		this.transferValue(hour+":"+this.state.minute+":"+this.state.second);
	}, 
	showDialSelf:function(value){
		this.setState({
			stage:value
		});
		if(this.props.whole){
			this.props.clockChange(true);
		}
		
	},
	closeClock:function(){
		if(this.props.whole){
			this.props.clockChange(false);
		}
	},
	render:function(){
		var 
			hour = this.state.hour,
			minute = this.state.minute,
			second = this.state.second,
			steps = [],
			stage = this.state.stage,
			step = (stage==="hour") ? 1 : 5,
			timeState = this.state.timeState,
			hourHand = [],
			minuteHand = [],
			secondHand = [];
		
		for(var i = 0,s;i<12;i++){
			
			s = i * step;
			if(timeState==="pm" && stage==="hour"){
				s += 12;
			}
			steps.push(s);
		}
		var clockItemClass = classNames(
				'clock-item',
				{
					'clock-item-whole':this.props.whole === true
				}
			);
		var sets = steps.map(function(s,i){
			var pos = poslist[i],
				left = pos[0] + "%",
				top = pos[1] + "%";

			return(
				<button key={i} className={clockItemClass} style={{left:left,top:top}} onClick={this.clickItem.bind(this,s)}>
					{s}
				</button>
			);
		},this);
		var timeOptionClass = classNames(
				'clock-option',
				{
					'show':stage === "hour"
				}

			);
		var hourHandClass = classNames(
				'hour-hand',
				{
					'active':stage === "hour"
				}
			);
		var minuteHandClass = classNames(
				'minute-hand',
				{
					'active':stage === "minute"
				}
			);
		var secondHandClass = classNames(
				'second-hand',
				{
					'active':stage === "second"
				}
			);
		var clockClass=classNames(
				'clock',
				{
					'clock-whole':this.props.whole === true,
					'hide':this.props.clockShow === false,
					'show':this.props.clockShow === true,
				}
			);
		
		var secondAngle = (360/60)*second;
		var minuteAngle = (360/60)*minute + (360/60)*(second/60);
		var hourAngle = (360/12)*hour + (360/12)*(minute/60);

		hourHand.push(<i key={'hour'} className={hourHandClass} style={{transform:"rotateZ("+hourAngle+"deg)"}}></i>);
		minuteHand.push(<i key={'minute'} className={minuteHandClass} style={{transform:"rotateZ("+minuteAngle+"deg)"}}></i>);
		secondHand.push(<i key={'second'} className={secondHandClass} style={{transform:"rotateZ("+secondAngle+"deg)"}}></i>);
		var closeBtn = [];
		var closeBtnClass = classNames(
				'fa',
				'fa-times-circle-o',
				{
					'show': this.props.clockShow === true,
					'hide': this.props.clockShow === false
				}
			);
		if(this.props.whole){
			closeBtn.push(<i key={'close'} className={closeBtnClass} onClick={this.closeClock}></i>);
		}


		return (
			<div>
				<div className="clock-container">
					<div className={clockClass}>
						<div className="clock-inner">
							<div className="clock-dial">
								{sets}
							</div>
							{hourHand}
							{minuteHand}
							{secondHand}
						</div>
						<div className={timeOptionClass}>
							<button className={classNames('time-am',{'active':timeState==="am"})} onClick={this.showDiaByTimeState.bind(this,'am')}>上午</button>
							<button className={classNames('time-pm',{'active':timeState==="pm"})} onClick={this.showDiaByTimeState.bind(this,'pm')}>下午</button>
						</div>
						{closeBtn}
					</div>
					<ClockTime
						hour={hour} 
						minute={minute} 
						second={second}
						showDialSelf={this.showDialSelf}
						add={this.add}
						decrease={this.decrease}
						whole={this.props.whole}
					/>
				</div>		
			</div>
		);
	}
});

module.exports = Clock;