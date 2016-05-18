var React = require('react');

/*
  表格行
*/

var TableRow = React.createClass({
  render:function(){
     
    //console.log(this.props.equipment);
    
    //var status = this.props.equipment.state==="0" ? "启用" : "禁用";
    return (
       <tr className="equipmentRow">
         <td>{10001}</td>
         <td>{'山西省太原市'}</td>
         <td>{'125.215.215'}</td>
         <td>{'135.256.352'}</td>
         <td>{'什么什么'}</td>
         <td>{'2015-01-02'}</td>
         <td>{'备注备注备注'}</td>
         <td>{'启用'}</td>
         <td><a href="#">推广</a><a href="#">消息列表</a></td>
       </tr>
    );
  }
});

module.exports = TableRow;