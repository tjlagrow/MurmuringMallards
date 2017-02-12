import React, { Component } from 'react';
import Slot from './Slot'
import './App.css';
import { getID } from './Template';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const TYPES = {
  FIELD: 'field' // Let's just call all dragable objects modules...
};

class App extends Component {
	createSlot(i) {
		let component_width = '100%';
		let component_height = '100%';
		switch(i){
			case 0:
				component_width = '100%';
				component_height = '20%';
				break;
			case 1:
				component_width = '66.66%';
				component_height = '40%';
				break;
			default:
				component_width = '33.33%';
				component_height = '40%';
				break;
		}
		return (
			<div key={i} style={{width: component_width, height: component_height}}>
				<Slot id={getID(i)} location={i} />
			</div>
		);
	}
	render() {
		const slots = []; 
	
		for (let i = 0; i < 6; i++) {
			slots.push(this.createSlot(i));
		}
		
		return (
      			<div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap'}}>
					{slots}
      			</div>

		);
	}

}

export default DragDropContext(HTML5Backend)(App);
