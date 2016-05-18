var React = require("react");
var Simditor = require('simditor');
require('../../../node_modules/simditor/styles/simditor.css');

var Mock = require('mockjs');

Mock.mock('testUeditor.json',{
  "id":10,
  "username":"",
  "subject":"asdasdasd",
  "createTime":1446694292000,
  "endTime":1447990294000,
  "seq":1,
  "fileId":"g2/M01/00/00/Qg0DAFY691aEcl3kAAAAAAAAAAA9588895",
  "content":"\u003cp\u003e\u003cspan style\u003d\"color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; line-height: 24px; text-indent: 28px; background-color: rgb(255, 255, 255);\"\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;罗克佳华，中外合资的高科技企业，信息化和自动化的\u003c/span\u003e总承包商\u003cspan style\u003d\"color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; line-height: 24px; text-indent: 28px; background-color: rgb(255, 255, 255);\"\u003e，是集产学研为一体的科研生产型企业，专注于用信息化手段推进安全生产、环境治理、节能减排、金融监控，保证管理体系监管有力。\u003c/span\u003e国家火炬计划\u003cspan style\u003d\"color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; line-height: 24px; text-indent: 28px; background-color: rgb(255, 255, 255);\"\u003e重点高新技术企业、国家级工程技术中心，同时承担国家信息产业技术进步和产业升级重点专项、\u003c/span\u003e国家科技支撑计划\u003cspan style\u003d\"color: rgb(51, 51, 51); font-family: arial, 宋体, sans-serif; font-size: 14px; line-height: 24px; text-indent: 28px; background-color: rgb(255, 255, 255);\"\u003e、国家火炬计划、国家科技攻关项目等重点研究课题。由于高端的技术、突出的贡献，罗克佳华被评为“中国信息化杰出企业”、“国家产品质量AAA级企业”等荣誉称号\u003c/span\u003e\u003c/p\u003e",
  "status":11,
  "ecode":"100008"
});

var Ueditor = React.createClass({
  componentDidMount: function() {
    
    var editor = new Simditor({
      textarea:$("#editor"),
      upload:true
    });

      var url = this.props.url; 
  
    //加载专题
  
    $.ajax({
      type : 'POST',
      data : {id : '10'},
      url : 'testUeditor.json',
      dataType:'json',
      success : function(data) {
        editor.setValue(data['content']);
      }
    });
    
    editor.on('valuechanged',function(){
      
    });

    

  },
  render:function(){
    return (
      <div>
        <textarea id="editor"></textarea>
      </div>
    );
  }
});

module.exports = Ueditor;