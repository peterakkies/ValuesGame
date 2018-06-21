import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ListGroupItem } from 'react-bootstrap';

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
				<ListGroupItem onClick={this.props.clicked}>
					{this.props.title}
				</ListGroupItem>
			</div>
		);
	}
}

export default DragSource('value', valueSource, collect)(Value);
