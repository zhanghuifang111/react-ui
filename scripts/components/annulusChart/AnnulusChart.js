var React = require('react');
require('./style.css');
var AnnulusChar = React.createClass({
	getInitialState: function() {
		return {
			percent: this.props.percent,
			total: this.props.total
		};
	},
	loadChar: function() {
		var el = this.refs.annulus;
		$(el).empty();
		var total = this.state.total;

		var percent = this.state.percent || 50;
		var size = this.props.size || 200;
		var lineWidth = this.props.lineWidth || 34;
		var rotate = this.props.rotate || 0;

		var canvas = document.createElement('canvas');
		var span = document.createElement('span');
		span.className = 'percent';
		span.textContent = percent;
		var spanState = document.createElement('span');
		spanState.className = 'state';
		spanState.textContent = '良';
		var circle1 = document.createElement('span');
		var circle2 = document.createElement('span');
		circle1.className = 'circle1';
		circle2.className = 'circle2';
		if (typeof(G_vmlCanvasManager) !== 'undefined') {
			G_vmlCanvasManager.initElement(canvas);
		}

		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = size;

		el.appendChild(span);
		el.appendChild(spanState);
		el.appendChild(circle1);
		el.appendChild(circle2);
		el.appendChild(canvas);

		ctx.translate(size / 2, size / 2); // change center
		ctx.rotate((-1 / 2 + rotate / 180) * Math.PI); // rotate -90 deg

		//imd = ctx.getImageData(0, 0, 240, 240);
		var radius = (size - lineWidth) / 2;

		var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();

			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
			ctx.lineCap = 'butt'; // butt, round or square
			ctx.lineWidth = lineWidth
			ctx.stroke();

		};

		drawCircle('rgba(21,158,213,.54)', lineWidth, total / total);
		drawCircle('#e8f710', lineWidth, percent / total);
	},
	componentWillReceiveProps: function(nextProps) {
		console.log(nextProps);
		if (nextProps.percent !== this.props.percent) {
			this.setState({
				percent: nextProps.percent
			});
		}
		if (nextProps.total !== this.props.total) {
			this.setState({
				total: nextProps.total
			});
		}
	},
	componentDidUpdate: function() {
		this.loadChar();
	},
	componentDidMount: function() {
		this.loadChar();
	},
	render: function() {

		return ( 
			<div className="annulus" ref="annulus">
			</div>
		);
	}
});

module.exports = AnnulusChar;