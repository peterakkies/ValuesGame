import React, { Component } from 'react';
import Values from '../../Values/Values.js';
import { DropTarget } from 'react-dnd';

const bucketTarget = {
	drop(props, monitor) {
		props.moveValue(monitor.getItem().valueTitle, props.bucketKey);
	}
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
};

class Bucket extends Component {
	render() {
		return this.props.connectDropTarget(
			<div className="Bucket">
				<h2>{this.props.title}</h2>
				<p>
					{this.props.numValues} out of the maximum {this.props.maxValues}.
				</p>
				<Values values={this.props.values} bucketKey={this.props.bucketKey} />
			</div>
		);
	}
}

export default DropTarget('value', bucketTarget, collect)(Bucket);
