export const MOVE_VALUE = "MOVE_VALUE";

export const assignValueToBucket = (valueIndex, valueTitle, bucketKey) => ({
	type: MOVE_VALUE,
	valueIndex,
	valueTitle,
	bucketKey
});
