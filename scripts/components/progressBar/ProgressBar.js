var React = require('react');
require('./progressBar.css');
var styles = [];
var ProgressBar = React.createClass({
	getInitialState: function() {
		return {
			color: this.props.color,
			axisValues:this.props.axisValues,
			axisTexts:this.props.axisTexts,
			score:this.props.score,
			sections:null,
			cursor:null
		};
	},
	componentDidMount: function() {
		var color = this.state.color || '#079eda',
			axisValues = this.state.axisValues || [0,60,70,80,100],
			axisTexts = this.state.axisTexts || ['高耗能','耗能','较节能','节能'],
			score = this.state.score || 75;
			
		var proStyle = window.getComputedStyle(this.refs.progressBar,null);
		var width = proStyle.width;
			styles.bgColor = {
			backgroundColor:color
		}
		styles.borderColor = {
			borderColor:color
		}
		styles.Color = {
			color:color
		}
		this.setState({
			sections : this.renderSection(axisValues,axisTexts),
			cursor : this.renderCursor(score,width,color)
		});
		

	},
	renderSection:function (axisValues,axisTexts){
		var count = axisValues.length-1;
		var sections = [];
		var wPercent = 100/count;
		for(var i = 0;i<count;i++){
			if(i===0){
				sections.push(
					<div className="section" key={i} style={{width:wPercent+'%'}}>
						<div className="pre-mark-point point" style={styles.borderColor}>
							<div className="text">{axisValues[0]}</div>
						</div>
						<div className="next-mark-point point" style={styles.borderColor}>
							<div className="text">{axisValues[i+1]}</div>
						</div>
						<div className="axis-text" style={styles.Color}>
							{axisTexts[i]}
						</div>
					</div>
				);
			}else{
				sections.push(
					<div className="section" key={i} style={{width:wPercent+'%'}}>
						<div className="next-mark-point point" style={styles.borderColor}>
							<div className="text">{axisValues[i+1]}</div>
						</div>
						<div className="axis-text" style={styles.Color}>
							{axisTexts[i]}
						</div>
					</div>
				);
			}
			
		}
		return sections;	
	},
	renderCursor:function(score,width,color){
		var cursor = [];
		var w = parseInt(width);
		var left = this.judgeLeft(score,w)-37;
		cursor.push(
			<div className="cursor" key={cursor} style={{left:left+'px',borderColor:color}}>
				{score+'分'}
				<i className="small-tranigle"></i>
				<i className="small-tranigle2" style={{ borderTop:'23px solid '+color}}></i>
			</div>
		);
		return cursor;
	},
	judgeLeft:function(score,width){
		var axisValues = this.state.axisValues || [0,60,70,80,100];
		var left = 0;
		if(axisValues.length===5){

			if(score>=0&&score<60){
				left = score/60*width*0.25;
			}else if(score>=60&&score<70){
				left = ((score-60)/10+1)*width*0.25;
			}else if(score>=70&&score<80){

				left = ((score-70)/10+2)*width*0.25;
			}else if(score>=80&&score<=100){
				left = ((score-80)/20+3)*width*0.25;
			}
		}else if(axisValues.length===4){
			if(score>=0&&score<60){
				left = score/60*width*(1/3);
			}else if(score>=60&&score<80){
				left = ((score-60)/20+1)*width*(1/3);
			}else if(score>=80&&score<=100){

				left = ((score-80)/20+2)*width*(1/3);
			}
		}
		return left;
	},
	render:function(){
		

		return(
			<div ref="progressBar" className="progress-bar-box flex-row" style={{backgroundColor:this.state.color}}>
				{this.state.sections}
				{this.state.cursor}
			</div>
		);
	}
});




module.exports = ProgressBar;