/* 
	We will keep track of which values belong to which bucket using state.
	List of values from James Clear.
*/
const initialState = {
	values: [
		{ title: 'Achievement', bucketKey: 0 },
		{ title: 'Adventure', bucketKey: 0 },
		{ title: 'Authenticity', bucketKey: 0 },
		{ title: 'Authority', bucketKey: 0 },
		{ title: 'Autonomy', bucketKey: 0 },
		{ title: 'Balance', bucketKey: 0 },
		{ title: 'Beauty', bucketKey: 0 },
		{ title: 'Boldness', bucketKey: 0 },
		{ title: 'Compassion', bucketKey: 0 },
		{ title: 'Challenge', bucketKey: 0 },
		{ title: 'Citizenship', bucketKey: 0 },
		{ title: 'Community', bucketKey: 0 },
		{ title: 'Competency', bucketKey: 0 },
		{ title: 'Contribution', bucketKey: 0 },
		{ title: 'Creativity', bucketKey: 0 },
		{ title: 'Curiosity', bucketKey: 0 },
		{ title: 'Determination', bucketKey: 0 },
		{ title: 'Fairness', bucketKey: 0 },
		{ title: 'Faith', bucketKey: 0 },
		{ title: 'Fame', bucketKey: 0 },
		{ title: 'Friendships', bucketKey: 0 },
		{ title: 'Fun', bucketKey: 0 },
		{ title: 'Growth', bucketKey: 0 },
		{ title: 'Happiness', bucketKey: 0 },
		{ title: 'Honesty', bucketKey: 0 },
		{ title: 'Humor', bucketKey: 0 },
		{ title: 'Influence', bucketKey: 0 },
		{ title: 'Inner Harmony', bucketKey: 0 },
		{ title: 'Justice', bucketKey: 0 },
		{ title: 'Kindness', bucketKey: 0 },
		{ title: 'Knowledge', bucketKey: 0 },
		{ title: 'Leadership', bucketKey: 0 },
		{ title: 'Learning', bucketKey: 0 },
		{ title: 'Love', bucketKey: 0 },
		{ title: 'Loyalty', bucketKey: 0 },
		{ title: 'Meaningful Work', bucketKey: 0 },
		{ title: 'Openness', bucketKey: 0 },
		{ title: 'Optimism', bucketKey: 0 },
		{ title: 'Peace', bucketKey: 0 },
		{ title: 'Pleasure', bucketKey: 0 },
		{ title: 'Poise', bucketKey: 0 },
		{ title: 'Popularity', bucketKey: 0 },
		{ title: 'Recognition', bucketKey: 0 },
		{ title: 'Religion', bucketKey: 0 },
		{ title: 'Reputation', bucketKey: 0 },
		{ title: 'Respect', bucketKey: 0 },
		{ title: 'Responsibility', bucketKey: 0 },
		{ title: 'Security', bucketKey: 0 },
		{ title: 'Self-Respect', bucketKey: 0 },
		{ title: 'Service', bucketKey: 0 },
		{ title: 'Spirituality', bucketKey: 0 },
		{ title: 'Stability', bucketKey: 0 },
		{ title: 'Success', bucketKey: 0 },
		{ title: 'Status', bucketKey: 0 },
		{ title: 'Trustworthiness', bucketKey: 0 },
		{ title: 'Wealth', bucketKey: 0 },
		{ title: 'Wisdom', bucketKey: 0 }
	]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'MOVE_VALUE':
			return {
				values: [
					...state.values.slice(0, action.valueIndex),
					{ title: action.valueTitle, bucketKey: action.bucketKey },
					...state.values.slice(action.valueIndex + 1)
				]
			};
		default:
			return state;
	}
};

export default rootReducer;
