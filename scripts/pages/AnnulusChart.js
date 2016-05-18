import React from "react";
import AnnulusChart from "../components/annulusChart/AnnulusChart.js";

class AnnulusChartPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>按钮</h1>
				<div className="example">
					<h4>Example</h4>
					<AnnulusChart 
						total={200}
						percent={85}
					/>
					<code>
						<pre>
							&lt;AnnulusChart{'\n'}
							{'\t'}total=&#123;Number&#125; //最大值{'\n'} 
							{'\t'}percent=&#123;Number&#125; //当前值{'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = AnnulusChartPage;