export const ActionType = {
	ADD_REVIEW: `ADD_REVIEW`,
}

export const addReviewAction = (review) => ({
	type: ActionType.ADD_REVIEW,
	payload: review,
});
