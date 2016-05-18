/**********说明*************/
/*
	<DatePiker
		dateOnly={boolean}			//只显示日历部分(Calendar)，默认为false
		timeOnly={boolean}			//只显示时间部分(Clock)，默认为false
		yearOnly={boolean}			//只显示年部分(Calendar)，默认为false
		monthOnly={boolean}			//只显示年、月部分(Calendar)，默认为false
		readOnly={boolean}			//只读，默认为false
		value={string|nummer}		//初始值，默认为空，调用本地当前时间
	/>

	
*/
/**********说明*************/

var React = require('react');
var classNames = require('classnames');
require('./css/datePicker.css');
var Clock = require('./Clock');
var Calendar = require('./Calendar');
var DateFormat = require('../../utils/dateFormat.js');
var DateClockTime = require("./DateClockTime");
var DatePicker = React.createClass({
	mixins:[
		require('react-clickaway')
	],
	//点击组件之外的区域
	componentClickAway:function(){
		this.close();
	},
	//打开日期选择器
	open:function(){
		this.setState({
			show:true
		});
		//$(".date-picker").show();
	},
	//关闭日期选择器
	close:function(){
			this.setState({
				show:false
			});
		//$(".date-picker").hide();	
	},
	componentWillReceiveProps : function(nextProps) {

    	if (nextProps.value !== this.props.value) {
    		this.setState({
    			value :nextProps.value
    		});
    	}
  	},
	getInitialState: function() {
		var 
			dateOnly = this.props.dateOnly || false,
			yearOnly = this.props.yearOnly || false,
			monthOnly = this.props.monthOnly || false,
			dayOnly = this.props.dayOnly || false,
			timeOnly = this.props.timeOnly || false,
			readOnly = this.props.readOnly || false,
			value = this.props.value ? new DateFormat(this.props.value).formatDate : new Date().getTime();
			/*console.log(value+"////");*/
		return {
			dateOnly:dateOnly,
			timeOnly:timeOnly,
			yearOnly:yearOnly,
			monthOnly:monthOnly,
			dayOnly:dayOnly,
			readOnly:readOnly,
			value: value,
			show:false
		};
	},

	receiveValue:function(value){
		this.setState({
			value:value
		});
	},
	render:function(){
		//console.log("+  "+this.state.value);
		var 
			dateOnly = this.state.dateOnly,
			timeOnly = this.state.timeOnly,
			yearOnly = this.state.yearOnly,
			monthOnly = this.state.monthOnly,
			dayOnly = this.state.dayOnly,
			readOnly = this.state.readOnly,
			value = this.state.value,
			container = [],
			dateFormat = new DateFormat(value),
			showDate = [],
			showTime = [],
			dateInput = [];
		//console.log(value+",,,");
		
		if(dateOnly == true){
			showDate.push(dateFormat.getDateOnly());
			container.push(<Calendar key={'dateOnly'} value={value} onChange={this.receiveValue}/>);
		}else if(timeOnly == true){
			showTime.push(dateFormat.getTimeOnly());
			container.push(<Clock key={'clock'} value={value} onChange={this.receiveValue}/>);
		}else if(yearOnly == true){
			showDate.push(dateFormat.getYear());
			container.push(<Calendar key={'yearOnly'} value={value} onChange={this.receiveValue} yearOnly={true} />);
		}else if(monthOnly == true){
			showDate.push(dateFormat.getYearAndMonth());
			container.push(<Calendar key={'monthOnly'} value={value} onChange={this.receiveValue} monthOnly={true}/>);
		}else{
			showDate.push(dateFormat.getDateOnly());
			showTime.push(dateFormat.getTimeOnly());

			container.push(<DateClockTime key={'dateclock'} value={value} onChange={this.receiveValue}/>);
		}

		/*if(dateOnly == false && timeOnly == false){
			showDate.push(dateFormat.getDateOnly());
			showTime.push(dateFormat.getTimeOnly());

			container.push(<DateClockTime value={value} onChange={this.receiveValue}/>);
		}else if(dateOnly == false && timeOnly == true){
			showTime.push(dateFormat.getTimeOnly());
			container.push(<Clock value={value} onChange={this.receiveValue}/>);
		}else if(dateOnly == true && timeOnly == false){
			showDate.push(dateFormat.getDateOnly());
			container.push(<Calendar value={value} onChange={this.receiveValue}/>);
		}else{
			container.push("参数配置错误");
		}*/

		if(!readOnly){
			dateInput.push(<div className="date-input" key={'read'} onClick={this.open}><span>{showDate}</span><span>{showTime}</span><i className="fa fa-calendar"></i></div>);
		}else{
			dateInput.push(<div className="date-input none" key={'no-read'}><span>{showDate}</span><span>{showTime}</span><i className="fa fa-calendar"></i></div>);
		}

		var datePickerClass=classNames(
				'date-picker',
				{
					'show':this.state.show === true,
					'hide':this.state.show === false
				}
			);
		return(
			<div className="datePicker">
				{dateInput}
				<div className={datePickerClass}>
				{container}
				</div>
				<input value={new DateFormat(this.state.value).getDateTimeServer()} type="hidden"/>
			</div>
		);
	}
});

module.exports = DatePicker;