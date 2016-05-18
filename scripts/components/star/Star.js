var React = require('react');
var classNames = require('classnames');
require('./star.css');
var star1Class = null,
	star2Class = null,
	star3Class = null;
var styles = {};
var Star = React.createClass({
	componentWillMount: function() {
		var score = this.props.score || 70;
		console.log(score);
		if(score>=50&&score<60){
			star1Class = classNames(
				'star-icon',
				'active'
			);
			styles.star1 = {
				width:23*((score-50)/10)+'px',
				overflow:'hidden'
			};

		}else if(score>=60&& score<80){
			star1Class = classNames(
				'star-icon',
				'active'
			);
			star2Class = classNames(
				'star-icon',
				'active'
			);
			styles.star2 = {
				width:23*((score-60)/20)+'px',
				overflow:'hidden'
			};
		}else if(score>=80){
			star1Class = classNames(
				'star-icon',
				'active'
			);
			star2Class = classNames(
				'star-icon',
				'active'
			);
			star3Class = classNames(
				'star-icon',
				'active'
			);
			/*styles.star3 = {
				width:23*((score-80)/20)+'px',
				overflow:'hidden'
			};
*/		}
	},
	render:function(){
	
		return (
			<div className="star-box">
				<div className="stars clearfix">
					<div className="star">
						<i className="star-icon"></i>
						<i className={star1Class} style={styles.star1}></i>
					</div>
					<div className="star">
						<i className="star-icon"></i>
						<i className={star2Class} style={styles.star2}></i>
					</div>
					<div className="star">
						<i className="star-icon"></i>
						<i className={star3Class}></i>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Star;