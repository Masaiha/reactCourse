import React from 'react';
import ReactDom from 'react-dom';


function buttonText(){
	return "Click me!";
}

const App = () =>{
	return (
		<div>
			<label className="label" for="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{ buttonText() }
			</button>
		</div>

	);
}


ReactDom.render(<App />, document.querySelector("#root"))
