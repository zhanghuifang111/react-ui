import React from "react";
import DatePicker from "../components/datePicker/DatePicker.js";

class DatePickerPage extends React.Component{
	render(){
		return(
			<div className="rkui">
				<h1>日期/时间 选择器</h1>
				<div className="content">
					<code>
						<pre>
							&lt;DatePicker{'\n'}
							{'\t'}dateOnly=&#123;boolean&#125; //只显示日历部分(Calendar),默认为false{'\n'} 
							{'\t'}timeOnly=&#123;boolean&#125; //只显示时间部分(Clock),默认为false{'\n'} 
							{'\t'}yearOnly=&#123;boolean&#125; //只显示年部分(Calendar),默认为false{'\n'} 
							{'\t'}monthOnly=&#123;boolean&#125; //只显示月部分(Calendar),默认为false{'\n'} 
							{'\t'}readOnly=&#123;boolean&#125; //只读,默认为false{'\n'}
							{'\t'}value=&#123;string|number&#125; //初始值，默认为空，调用本地当前时间{'\n'} 
							/&gt;
						</pre>
					</code>

					<h4>Example</h4>
					<div className="example">
						<h5>日期和时间</h5>
						<DatePicker value={"1448000765756"}/>
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>日期</h5>
						<DatePicker dateOnly={true} />
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							{'\t'}dateOnly=&#123;true&#125; {'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>时间</h5>
						<DatePicker timeOnly={true}/>
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							{'\t'}timeOnly=&#123;true&#125; {'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>年</h5>
						<DatePicker yearOnly={true}/>
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							{'\t'}yearOnly=&#123;true&#125; {'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>月</h5>
						<DatePicker monthOnly={true}/>
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							{'\t'}monthOnly=&#123;true&#125; {'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					<div className="example">
						<h5>只读</h5>
						<DatePicker readOnly={true}/>
						<code>
							<pre>
								&lt;DatePicker{'\n'}
							{'\t'}readOnly=&#123;true&#125; {'\n'}
							/&gt;
							</pre>
						</code>
					</div>
					
				</div>
				
			</div>
		);
	}
}

module.exports = DatePickerPage;