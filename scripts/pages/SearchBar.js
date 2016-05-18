import React from "react";
import SearchBar from "../components/searchBar/SearchBar.js";

class SearchBarPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>搜索框</h1>
				<div className="example">
					<h4>Example</h4>
					<SearchBar />
					<code>
						<pre>
							&lt;SearchBar /&gt;
						</pre>
					</code>
					
				</div>
				
			</div>
		);
	}
}

module.exports = SearchBarPage;