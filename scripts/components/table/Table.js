var React = require('react');
var TableRow = require('./TableRow');

/*
  表格
*/

var Table = React.createClass({
  
  
  render:function(){
    var headerName = [];
    var header = this.props.header ||['列1','列2','列3','列4','列5','列6','列7','列8','列9'];
    header.forEach(function(name){
      headerName.push(<th>{name}</th>);
    });
    var rows = [];
    var page = this.props.page;
    var pageSize = this.props.pageSize;
    var data = this.props.data ||{};
    rows.push(<TableRow />);
    /*this.props.data.forEach(function(equipment,index){
    
      rows.push(<TableRow equipment={equipment} />);
     
      
    }.bind(this));*/
    
    return (
      <table className="equipmentTable">
        <thead className="equipmentCategoryRow">
          <tr>
            {headerName}
          </tr>
        </thead>
        <tbody className="equipmentRow">
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = Table;