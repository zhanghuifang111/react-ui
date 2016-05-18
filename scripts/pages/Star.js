import React from "react";
import Star from "../components/star/Star.js";

class StarPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>星级评分</h1>
				<div className="example">
					<h4>Example</h4>
					<Star />
					<code>
						<pre>
							&lt;Star{'\n'}
							{'\t'}score=&#123;70&#125; //分数值{'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
			
		);
	}
}

module.exports = StarPage;