import React from 'react';
import ReactDom from 'react-dom';


const App = () =>{
	return <div> Olá mundo! </div>;
}


ReactDom.render(<App />, document.querySelector("#root"))
