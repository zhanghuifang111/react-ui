import React from "react";
import Modal from "../components/modal/Modal.js";
var node = <p>这是一个alert</p>;
class ModalPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>弹框</h1>
				<div className="example">
					<h4>Example</h4>
					<div className="example">
						<h5>Modal.alert</h5>
						
						<button onClick={Modal.alert.bind(this,node)}>alert example</button>
						<code>
							<pre>
							&lt;button onClick=&#123;Modal.alert.bind(this,node)&#125;&gt;alert example&lt;/button&gt;{'\n'}
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>Modal.confirm</h5>
						<button onClick={Modal.confirm.bind(this,node)}>alert example</button>
						<code>
							<pre>
							&lt;button onClick=&#123;Modal.confirm.bind(this,node)&#125;&gt;alert example&lt;/button&gt;
							</pre>
						</code>
					</div>
					
				</div>
				
			</div>
		);
	}
}

module.exports = ModalPage;