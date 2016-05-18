import React from "react";
import Tab from "../components/tab/Tab.js";

class TabPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>标签页</h1>
				<div className="example">
					<h4>Example</h4>
					<Tab />
					<code>
						<pre>
							&lt;Tab{'\n'}
							{'\t'}tabs=&#123;Array&#125; //标签名称,(eg.['标签1','标签2']){'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = TabPage;