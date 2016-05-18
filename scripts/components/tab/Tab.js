var React = require('react');
/*
  Tabs
*/
var Tab = React.createClass({
  getInitialState:function(){
    return {
      tabs:['标签1','标签2'],
      index:0
    }
  },
  tabClick:function(i,event){
    event.preventDefault();
    this.setState({
      index:i
    });
  },
  render:function(){

    var liE = [];
    var position = this.state.index;
    this.state.tabs.forEach(function(tabName,index){
      if(index==position){
        liE.push(<li key={index} className="active"><a href="#" onClick={this.tabClick.bind(this,index)}>{tabName}</a></li>);
      }else{
        liE.push(<li key={index}><a href="#" onClick={this.tabClick.bind(this,index)}>{tabName}</a></li>);
      }
      
    }.bind(this));

    return (
      <div className="tabs">
        <ul>
          {liE}
        </ul>
      </div>
    );
  }
});

module.exports = Tab;