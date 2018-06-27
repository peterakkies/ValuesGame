import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Value from './Value';

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

const getValuesHTML = (values, bucketKey) => {
	const HTML = values.map(
		(value, index) =>
			value.bucketKey === bucketKey ? (
				<Value key={index} title={value.title} />
			) : null
	);
	return HTML;
};

class Bucket extends Component {
	render() {
		return this.props.connectDropTarget(
			<div className="Bucket">
				<h2>{this.props.title}</h2>
				<p>
					{this.props.numValues} out of {this.props.maxValues}.
				</p>
				<ul className="values">
					{getValuesHTML(this.props.values, this.props.bucketKey)}
				</ul>
			</div>
		);
	}
}

export default DropTarget('value', bucketTarget, collect)(Bucket);
