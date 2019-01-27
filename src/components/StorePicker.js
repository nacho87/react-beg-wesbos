import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	//Bind this
	// constructor() {
	// 	super();
	// 	console.log('Gonna Create a component');
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	myInput = React.createRef();

	// use arrow function for use "this" inside function
	goToStore = (event) => {

		//1. Stop the form from submitting
		event.preventDefault();
		
		//2. Get the text from that input
		console.log(this.myInput.current.value);
		const storeName = this.myInput.current.value;

		//3. Change the page to  /store/text-in-input
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<form action="" className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					required 
					placeholder="Store Name" 
					defaultValue={getFunName()} 
				/>
				<button type="submit">
					Visit Store ->
				</button>
			</form>
		)
	}
}

export default StorePicker;