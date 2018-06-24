import React from 'react';
import Value from './Value';

const getValuesHTML = (values, bucketKey) => {
	const HTML = values.map(
		(value, index) =>
			value.bucketKey === bucketKey ? (
				<Value key={index} title={value.title} />
			) : null
	);
	return HTML;
};

const valueList = (props) => {
	return (
		<ul className="values">{getValuesHTML(props.values, props.bucketKey)}</ul>
	);
};

export default valueList;
