var React = require('react');

/*
  搜索栏
*/

var SearchBar = React.createClass({
  handleSearch:function(){
    
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value.trim()
    );
  },
  render:function(){
    return (
      <div className="searchBar">
        设备编号、地址:<input type="text" value={this.props.filterText} ref="filterTextInput" placeholder="请输入设备编号或安装地址" />
        <button onClick={this.handleSearch}>查询</button>
      </div>
    );
  }
});

module.exports = SearchBar;