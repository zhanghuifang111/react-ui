import React from "react";
import Table from "../components/table/Table";

class TablePage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>表格</h1>
				<div className="example">
					<h4>Example</h4>
					<Table />
					<code>
						<pre>
							&lt;Table{'\n'}
							{'\t'}header=&#123;Array&#125; //表格头-列名称,(eg.['列1','列2','列3','列4','列5','列6','列7','列8','列9']){'\n'} 
							{'\t'}data=&#123;Object&#125; //数据{'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = TablePage;