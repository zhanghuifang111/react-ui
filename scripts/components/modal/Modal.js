/*
var node = <p>这是一个alert</p>;
<button onClick={Modal.alert.bind(this,node)}>alert example</button>
<button onClick={Modal.confirm.bind(this,node)}>alert example</button>
*/

var React = require('react');
import {render} from 'react-dom';
require('./modal.css');
var modalContainer = null;
var Modal = React.createClass({
	componentDidMount: function() {

		console.log(this.refs);
	},
	close:function(){

		document.body.removeChild(modalContainer[0]);
		//modalContainer = null;
	},
	render: function() {
		
		var node = this.props.node;
		var type = this.props.type;
		var buttons = [];
		if(type==="alert"){
			
			buttons.push(<button className="btn determine"><span className="text">确定</span><span className="bg"></span></button>);

		}else if(type==="confirm"){
			
buttons.push(<button className="btn determine"><span className="text">确定</span><span className="bg"></span></button>);
		buttons.push(<button className="btn cancel" onClick={this.close}>取消</button>);
		}
		return (
			<div className="modal-container">
				<div className="modal">
					<i className="fa fa-times close" onClick={this.close}></i>
					{node}
					<div className="bottom">
						{buttons}
					</div>
				</div>
				<div className="modal-shape">

				</div>
			</div>
		);
	}
});


Modal.alert = function(node){
	var type = "alert";
	Modal.open(node,type);
}
Modal.confirm = function(node){
	var type = "confirm";
	Modal.open(node,type);
}
Modal.open = function(node,type){
	
	/*if(!modalContainer){
		createContainer(node,type);
	}*/
	createContainer(node,type);
}

function createContainer(node,type){
	modalContainer = $("<div id='modal'><div>");
	$("body").append(modalContainer);
	render(<Modal node={node} type={type}/>,modalContainer[0]);
}

module.exports = Modal;