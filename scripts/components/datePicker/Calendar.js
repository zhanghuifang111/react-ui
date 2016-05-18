var React = require('react');
var classNames = require('classnames');

var Calendar = React.createClass({
	//获取某个月的天数
	getDaysInMonth:function(year,month){
		return new Date(year,month,0).getDate();
	},
	//初始化
	getInitialState:function(){
		//console.log("calendar "+this.props.value);
		var date = new Date(this.props.value);
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		var stage = 'day';
		var yearOnly = this.props.yearOnly || false;
		var monthOnly = this.props.monthOnly || false;

		if(yearOnly==true){
			stage = 'year';
		}else if(monthOnly == true){
			stage = 'month';
		}
		return{
			year:year,
			month:month+1,
			day:day,
			yearOnly:yearOnly,
			monthOnly:monthOnly,
			stage:stage
		};
	},
	//左方向键
	prev:function(){
		var _this = this;
		var month = this.state.month;
		var year = this.state.year;
		var stage = this.state.stage;
		switch(stage) {
			case 'day':
				changeMonth();
				break;
			case 'month':
				changeYear();
				break;
			case 'year':
				changeYearPlus();
				break;
		}

		function changeMonth(){
			month -= 1;
			if(month<=0){
				year--;
				month = 12;
			}

			_this.setState({
				month:month,
				year:year,
				day:0
			});
		}
		function changeYear(){
			year -= 1;
			_this.setState({
				year:year
			});
		}
		function changeYearPlus(){
			year -= 25;
			if(year<500){
				year=5000;
			}
			_this.setState({
				year:year
			});
		}
		
	},
	//右方向键
	next:function(){
		var _this = this;
       	var month = this.state.month;
       	var year = this.state.year;
       	var stage = this.state.stage;
       	switch(stage) {
			case 'day':
				changeMonth();
				break;
			case 'month':
				changeYear();
				break;
			case 'year':
				changeYearPlus();
				break;
		}
       	
		function changeMonth(){
			month += 1;
	       	if(month>12){
	       		year++;
	       		month = 1;
	       	}
	       	
			_this.setState({
				month:month,
				year:year,
				day:0
			});
		}
		function changeYear(){
			year += 1;
			_this.setState({
				year:year
			});
		}
		function changeYearPlus(){
			year += 25;
			
			if(year>5000){
				year=500;
			}

			_this.setState({
				year:year
			});

		}
	},
	//选取day
	selectDay:function(day,month){
		var year;
		if(month>12){
			year = this.state.year+1;
			month = 1;
		}else if(month<1){
			year = this.state.year-1;
			month = 12;
		}else{
			year = this.state.year;
		}
		console.log(year);
		this.setState({
			month:month,
			day:day,
			year:year
		});
		
		this.props.onChange(year+"/"+month+"/"+day+" "+new Date(this.props.value).toLocaleTimeString("zh-CN",{hour12:false}));
	},
	//渲染day
	renderDay:function(){
		var year = this.state.year;
		var month = this.state.month;
		var day = this.state.day;
		var dayCounter;  //日计数器
		var date; //日期
		var days;  //每个月的总天数
		var trAmount; //总行数
		var tdAmount = 7; //总列数

		date = year + "/" + month + "/" + 1;  //每个月的第一天
		var weekToDay = new Date(Date.parse(date)).getDay(); //每月第一天对应的星期数

		days = this.getDaysInMonth(year,month);
		
		trAmount = Math.ceil((days+weekToDay)/tdAmount);
		
		var prevDaysIn = weekToDay;
		var nextDaysIn = trAmount * tdAmount - weekToDay - days;

		var prevMonthDays = this.getDaysInMonth(year, month - 1);

		var startTds = tdAmount - weekToDay;

		var startDayPrev = prevMonthDays-prevDaysIn+1;
		
		var trElements = [];
		for(var i = 0;i<trAmount;i++){
			if(i===0){
				var tdElements = [];
				for(var j = startDayPrev-1;j<prevMonthDays;j++){
					tdElements.push(<td key={'day'+i+j} onClick={this.selectDay.bind(this,j+1,month-1)} className="prev-day">{j+1}</td>);
				}
				for(var j = 0;j<tdAmount-prevDaysIn;j++){
					if(day==(j+1)){
						tdElements.push(<td key={'day'+i+j} className="active" onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}else{
						tdElements.push(<td key={'day'+i+j} onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}	
				}
				trElements.push(<tr key={'day'+i+j}>{tdElements}</tr>);
			}else if(i===trAmount-1){
				var tdElements = [];
				for(var j = i*tdAmount-prevDaysIn;j<days;j++){
					if(day==(j+1)){
						tdElements.push(<td key={'day'+i+j} className="active" onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}else{
						tdElements.push(<td key={'day'+i+j} onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}
					
				}
				for(var j = 0;j<trAmount*tdAmount-days-prevDaysIn;j++){
					tdElements.push(<td key={'day'+i+j} onClick={this.selectDay.bind(this,j+1,month+1)} className="next-day">{j+1}</td>);
				}
				trElements.push(<tr key={'row'+i}>{tdElements}</tr>);
			}else{
				var tdElements = [];
				for(var j = i*tdAmount-prevDaysIn;j<i*tdAmount-prevDaysIn+7;j++){
					if(day==(j+1)){
						tdElements.push(<td key={'day'+i+j} className="active" onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}else{
						tdElements.push(<td key={'day'+i+j} onClick={this.selectDay.bind(this,j+1,month)}>{j+1}</td>);
					}
				}
				trElements.push(<tr key={'row'+i}>{tdElements}</tr>);
			}

			
		}

		return (
			<div className="day-container">
				<table>
					<thead>
						<tr>
							<th>日</th>
							<th>一</th>
							<th>二</th>
							<th>三</th>
							<th>四</th>
							<th>五</th>
							<th>六</th>
						</tr>
					</thead>
					<tbody>
					{trElements}
					</tbody>
				</table>
			</div>
		);
	},
	//打开month
	openMonth:function(){
		this.setState({
			stage:'month'
		});
	},
	//选取month
	selectMonth:function(month){
		var monthOnly = this.state.monthOnly;
		var year = this.state.year;
		var stage = 'day';
		if(monthOnly == true){
			stage = 'month';
			this.setState({
				month:month,
				day:0,
				stage:stage
			});
			this.props.onChange(year+"/"+month+"/"+1+" "+new Date(this.props.value).toLocaleTimeString("zh-CN",{hour12:false}));
		}else{
			this.setState({
				month:month,
				day:0,
				stage:'day'
			});
		}
		

	},
	//渲染month
	renderMonth:function(){
		var buttonEles = [];
		for(var i = 0;i<12;i++){
			buttonEles.push(<button key={'month'+i} onClick={this.selectMonth.bind(this,i+1)}>{i+1}月</button>);
		}

		return(
			<div className="month-container">
				{buttonEles}
			</div>	
		);
	},
	//打开year
	openYear:function(){
		this.setState({
			stage:'year'
		});
	},
	//选取year
	selectYear:function(year){
		var yearOnly = this.state.yearOnly;
		var monthOnly = this.state.monthOnly;
		var stage = 'day';
		if(yearOnly == true){
			stage = 'year';
			this.setState({
				year:year,
				day:0,
				stage:stage
			});
			this.props.onChange(year+"/"+1+"/"+1+" "+new Date(this.props.value).toLocaleTimeString("zh-CN",{hour12:false}));
		}else if(monthOnly == true){
			stage = 'month';
			console.log('click show month');
			this.setState({
				year:year,
				day:0,
				stage:stage
			});
			//this.props.onChange(year+"/"+month+"/"+day+" "+new Date(this.props.value).toLocaleTimeString("zh-CN",{hour12:false}));
		}else {
			this.setState({
				year:year,
				day:0,
				stage:'day'
			});
		}
		//console.log('click year '+stage);
		


	},
	//渲染year
	renderYear:function(){
		var year = this.state.year;
		var buttonEles = [];
		for(var i = 0;i<25;i++){
			buttonEles.push(<button key={'year'+i} onClick={this.selectYear.bind(this,year-12+i)}>{year-12+i}</button>);
		}
		return(
			<div className="year-container">
				{buttonEles}
			</div>
		);
	},
	render:function(){
		var container;
		var head = [];
		var stage = this.state.stage;
		switch(stage) {
			case 'day':
				container = this.renderDay();
				head.push(
					<div key={'head1'} className="condition-head">
						<i className="fa fa-chevron-left" onClick={this.prev}></i>
						<span onClick={this.openYear}>{this.state.year+"年"}</span><span onClick={this.openMonth} className="month-text">{this.state.month+"月"}</span>
						<i className="fa fa-chevron-right" onClick={this.next}></i>
					</div>
				); 
				break;
			case 'month':
				container = this.renderMonth();
				head.push(
					<div key={'head2'} className="condition-head">
						<i className="fa fa-chevron-left" onClick={this.prev}></i>
						<span onClick={this.openYear}>{this.state.year+"年"}</span><span onClick={this.openMonth} className="month-text">{this.state.month+"月"}</span>
						<i className="fa fa-chevron-right" onClick={this.next}></i>
					</div>
				);
				break;
			case 'year':
				container = this.renderYear();
				head.push(
					<div key={'head3'} className="condition-head">
						<i className="fa fa-chevron-left" onClick={this.prev}></i>
						<span onClick={this.openYear}>{this.state.year+"年"}</span>
						<i className="fa fa-chevron-right" onClick={this.next}></i>
					</div>
				);
				break;
		}

		var fuzzyClass = classNames({
			'fuzzy':this.props.clockShow === true
		});
		//console.log("calendar@ "+this.props.value);
		return (
			<div className={fuzzyClass}>
				{head}
				{container}
			</div>
		);
	}
});

module.exports = Calendar;