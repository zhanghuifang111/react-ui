import React from "react";
import Button from "../components/button/Button.js";

class ButtonPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>按钮</h1>
				<div className="example">
					<h4>Example</h4>
					<Button status="primary">Primary</Button>
					<Button status="success">Success</Button>
					<Button status="warning">Warning</Button>
					<Button status="error">Error</Button>
					<Button status="info">Info</Button>
					<Button>Normal Button</Button>
					<code>
						<pre>
							&lt;Button{'\n'}
							{'\t'}className=&#123;string&#125; //class{'\n'} 
							{'\t'}type=&#123;"submit|button"&#125; //按钮类型，可选值为submit|button,不填默认为button{'\n'} 
							{'\t'}disabled=&#123;Boolean&#125; //与button的disabled属性相同{'\n'} 
							{'\t'}once=&#123;Boolean&#125; //值为true时，当button点击过后，状态会变更为disabled{'\n'} 
							{'\t'}status=&#123;String&#125; //primary|success|warning|error|info{'\n'} 
							{'\t'}onClick=&#123;function&#125; //点击事件{'\n'} 
							/&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = ButtonPage;