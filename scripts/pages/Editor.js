import React from "react";
import Editor from "../components/editor/Editor.js";

class EditorPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>文本编辑器</h1>
				<p>对Simditor编辑器进行了集成</p>
				<p>Simditor是团队协作工具 Tower 使用的富文本编辑器。</p>
				<div className="example">
					<h4>Example</h4>
					<Editor />
					<code>
						<pre>
							&lt;Editor /&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = EditorPage;
