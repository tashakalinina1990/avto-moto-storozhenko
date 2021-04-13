import {extend} from '../utils/utils';
import {ActionType} from './actions';
import {Reviews} from '../mock/mocks';

const initialState = {
	reviews: Reviews,
}

const reviews = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_REVIEW:
			return extend(state, {
				reviews: [...state.reviews, action.payload],
			});
		}
	return state;
}

export {reviews};
