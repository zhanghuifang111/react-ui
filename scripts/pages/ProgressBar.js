import React from "react";
import ProgressBar from "../components/progressBar/ProgressBar.js";

class ProgressBarPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>进度条</h1>
				<div className="example">
					<h4>Example</h4>
					<ProgressBar />

					<code>
						<pre>
							&lt;ProgressBar{'\n'}
							{'\t'}score=&#123;Number&#125; //分数值,(eg.75){'\n'} 
							{'\t'}axisValues=&#123;Array&#125; //下标数值,(eg.[0,60,70,80,100]){'\n'}
							{'\t'}axisTexts=&#123;Array&#125; //阶段名称,(eg.['高耗能','耗能','较节能','节能']){'\n'}
							{'\t'}color=&#123;String&#125; //颜色值,(eg.'#079eda'){'\n'}
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = ProgressBarPage;