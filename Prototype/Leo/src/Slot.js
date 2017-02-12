import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import FieldData from './fieldData';

const SLOT_TYPES = {
  DATA_FIELD: 'dataField'
};

const slotTarget = { 
	canDrop(props) {
		console.log(props.id);
		return props.id !== 0; 
  	},
	drop(props, monitor, component) {
      
	const dragged = monitor.getItem();
      component.setState({id: dragged.id});

      return { id:dragged.id };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    result: monitor.getDropResult()
  };
}

function fillSlot(id) {
		switch(id){
			case 0:
				return (<div>
                          <div style={{diplay:'inline-block', background:'#CFD8DC'}}>
                          <img src="./img/logo.png" height="60px" style={{marginTop: '10px', paddingBottom:'12px', paddingLeft:'10px'}} />
                          <FieldData id='0' text='Pitch Comparison' />
                          <FieldData id='1' text='Twitter' />
                          <FieldData id='2' text='Ghost Thing' />
                          <FieldData id='3' text='Tweet-A-Stat' />
                        </div>
                      </div>);
				break;
			default:
				return(
				<div height="100%"><p style={{margin: '0',height:'100%', textAlign: 'center',
					verticalAalign: 'middle', lineHeight:'25', border: '1px solid #000000',
					backgroundColor:'darkgrey' }}>
									X</p>
				</div>
				);
				break;
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

export default DropTarget(SLOT_TYPES.DATA_FIELD, slotTarget, collect)(Slot);

