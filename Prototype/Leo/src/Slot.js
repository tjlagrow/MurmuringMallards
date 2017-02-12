import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import FieldData from './fieldData';
import { TYPES } from './Template';

const slotTarget = { 
	canDrop(props) {
		console.log(props.id);
		console.log("test99");
		return props.id !== 0; 
  	},
	drop(props, monitor, component) {
      
	const dragged = monitor.getItem();
      console.log("test445");
      console.log("ID: "+ dragged.id);
	component.setState({id: dragged.id});

      console.log("Component.state.id: "+ component.state.id);
      return { id:dragged.id };
  }
};

function collect(connect, monitor) {
  
	console.log("test7765")
	return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    result: monitor.getDropResult()
  };
}

function fillSlot(id) {
		console.log("fillSlotGot: " +id);
		if(id == 0){
				return (<div >
                          <div style={{diplay:'inline-block', background:'#CFD8DC'}}>
                          <img src="./img/logo.png" height="60px" style={{marginTop: '10px', paddingBottom:'12px', paddingLeft:'10px'}} />
                          <FieldData id='0' text='Pitch Comparison' />
                          <FieldData id='1' text='Twitter' />
                          <FieldData id='2' text='Ghost Thing' />
                          <FieldData id='3' text='Tweet-A-Stat' />
                        </div>
                      </div>);
		} else if(id == 1) {
				return (
					<div style={{background:'#CFD8DC', height:'30'}} >
                          		<p>1</p>
					</div>
                          	);
		} else if(id == 2) {
				return (
					<div>
                          		<p>2</p>
					</div>
					);
		} else if(id == 3) {
				return (
					<div>
                          		<p>3</p>
					</div>
					);
		} else if(id == 4) {
				return (
                      		<div>
                          		<p>4</p>
					</div>
					);

		} else {	
				return(
				<div height="100%"><p style={{margin: '0',height:'100%', textAlign: 'center',
					verticalAalign: 'middle', lineHeight:'25', border: '1px solid #000000',
					backgroundColor:'darkgrey' }}>
									X</p>
				</div>
				);
		}
}


class Slot extends Component {
	constructor(props) {
		super(props);
		this.state = {id: props.id};
	}
	
	clearChild() {
		this.child = (<div></div>)
	}
	
	render() {
		const { id, connectDropTarget, canDrop, result} = this.props;
		let bColor= "#222";
		
		if (canDrop) {
			bColor= 'darkgreen';
		} else {
			bColor= 'darkred';
		}
	
		return connectDropTarget(
			<div style={{display:'inline'}}>
				{fillSlot(this.state.id)}
			</div>
		);
  }
}

export default DropTarget(TYPES.FIELD, slotTarget, collect)(Slot);

