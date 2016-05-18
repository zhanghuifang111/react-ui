import React from "react";
import classnames from 'classnames';
require('./style.scss');

var Button = React.createClass( {

	getInitialState:function(){
		return {
			state :{
			    	disabled: this.props.disabled,
			    	show: null
			  }
		}
	},
  componentWillReceiveProps:function(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.setState({ disabled: nextProps.disabled })
    }
  },


  disable:function(elem) {
    this.setState({ disabled: true, show: elem })
  },

  enable:function(elem) {
    this.setState({ disabled: false, show: elem })
  },

  handleClick:function() {
    if (this.props.onClick) {
      this.props.onClick()
    }
    if (this.props.once) {
      this.disable()
    }
  },

  render:function() {
    let status = this.props.status
    if (status) {
      status = `rct-button-${status}`
    }

    const className = classnames(
      this.props.className,
      'rct-button',
      status
    )

    return (
      <button
        style={this.props.style}
        disabled={this.state.disabled}
        className={className}
        type={this.props.type || "button"}>
        { this.state.show || this.props.children }
      </button>
    )
  }
});

module.exports = Button;