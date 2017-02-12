import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { TYPES } from './Template';

const fieldDataSrc = {
  beginDrag(props) {
	console.log(props.id);
    return { id: props.id };
  },
  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
    }
}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class FieldData extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <button style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 12,
        fontWeight: 'bold',
        cursor: 'move',
        border: '1px solid #CFD8DC',
        display: 'inline',
        backgroundColor: '#CFD8DC',
        verticalAlign: 'top'
      }}>
        <p style={{fontSize:20, color:'#757575'}}>{this.props.text}</p>
      </button>
    );
  }
}

export default DragSource(TYPES.FIELD, fieldDataSrc, collect)(FieldData);
