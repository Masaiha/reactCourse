import React from 'react';
import ReactDom from 'react-dom';

// create a rect component
const App = () =>{

	//const buttonText = "Click me!"
	const buttonText = { text: "Click me!" }

	return (
		<div>
			<label className="label" for="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{ buttonText.text }
			</button>
		</div>

	);
}


ReactDom.render(<App />, document.querySelector("#root"))
