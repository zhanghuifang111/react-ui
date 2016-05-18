import React from 'react';
import Mock from 'mockjs';
import {Link} from 'react-router';
/*
  左侧列表
*/

const LeftNav = React.createClass({

	componentDidUpdate:function(){
		$(".drop-menu-title").off("click");
		$(".drop-menu-title").on('click',function(e){
			
			var flag = $(this).parent().children('ul').hasClass('hide');
			
			if(!flag){
				$(this).parent().children('ul').addClass('hide');
				$(this).find('.sidebar-title-icon').addClass('rotateZ-90');
			}else{
				$(this).parent().children('ul').removeClass('hide');
				$(this).find('.sidebar-title-icon').removeClass('rotateZ-90');
			}
		});
	},
	componentDidMount:function(){
		
		$(".drop-menu-title").on('click',function(e){

			var flag = $(this).parent().children('ul').hasClass('hide');

			if(!flag){
				$(this).parent().children('ul').addClass('hide');
				$(this).find('.sidebar-title-icon').addClass('rotateZ-90');
			}else{
				$(this).parent().children('ul').removeClass('hide');
				$(this).find('.sidebar-title-icon').removeClass('rotateZ-90');
			}
		});
	},
	hide:function(){
		$(".rightContent").css({
			'overflow':'hidden'
		});
	},
	show:function(){
		
		$(".rightContent").css({
			'overflow-x':'hidden',
			'overflow-y':'scroll'
		});
	},
	render:function(){
		
		return (
			<div className="leftNav">
				<div className="drop-menu">
				    <div className="drop-menu-title"><i className="sidebar-title-icon icon-arrow-down"></i>基础</div>
					<ul className="drop-menu-items">
						<li className="drop-menu-item"><Link to="/button"><span className="item-title">按钮</span></Link></li>
						<li className="drop-menu-item"><Link to="icon"><span className="item-title">图标</span></Link></li>
					</ul>
				</div>
				<div className="extra-menu-line"></div>
				<div className="drop-menu">
				    <div className="drop-menu-title"><i className="sidebar-title-icon icon-arrow-down"></i>常用</div>
					<ul className="drop-menu-items">
						<li className="drop-menu-item"><Link to="/table"><span className="item-title">表格</span></Link></li>
						<li className="drop-menu-item"><Link to="/datePicker"><span className="item-title">日期/时间 选择器</span></Link></li>
						<li className="drop-menu-item"><Link to="/tab"><span className="item-title">标签栏</span></Link></li>
						<li className="drop-menu-item"><Link to="/editor"><span className="item-title">文本编辑器</span></Link></li>
						<li className="drop-menu-item"><Link to="/progressBar"><span className="item-title">进度条</span></Link></li>
						<li className="drop-menu-item"><Link to="/star"><span className="item-title">评分</span></Link></li>
						<li className="drop-menu-item"><Link to="/searchBar"><span className="item-title">搜索框</span></Link></li>
						<li className="drop-menu-item"><Link to="/pagination"><span className="item-title">分页</span></Link></li>
						<li className="drop-menu-item"><Link to="/modal"><span className="item-title">弹框</span></Link></li>
						<li className="drop-menu-item"><Link to="annulusChart"><span className="item-title">环形进度条</span></Link></li>
					</ul>
				</div>
			</div>
		);
	}
});

export default LeftNav;