import React from "react";
import Pagination from "../components/pagination/Pagination.js";

class PaginationPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>分页</h1>
				<div className="example">
					<h4>Example</h4>
					<Pagination />
					<code>
						<pre>
							&lt;Pagination{'\n'}
							{'\t'}page=&#123;Number&#125; //当前页{'\n'}
							{'\t'}pageSize=&#123;Number&#125; //每页显示多少条数据{'\n'} 
							{'\t'}totalSize=&#123;Number&#125; //数据总量{'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}
module.exports = PaginationPage;