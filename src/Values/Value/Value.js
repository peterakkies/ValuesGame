import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

/* Define the specification of the draggable item value. */
const valueSource = {
	beginDrag(props) {
		return {
			valueTitle: props.title
		};
	}
};

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
};

class Value extends Component {
	render() {
		const { connectDragSource, isDragging } = this.props;
		return connectDragSource(
			<div
				style={{
					opacity: isDragging ? 0.5 : 1,
					cursor: 'move'
				}}
			>
				<li>{this.props.title}</li>
			</div>
		);
	}
}

export default DragSource('value', valueSource, collect)(Value);
