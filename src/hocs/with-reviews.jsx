import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {extend} from '../utils/utils';
import {addReviewAction} from '../store/actions';

export const withReviews = (Component) => {
	class WithReviews extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				isPopupOpen: false,
			}

			this.onPopupChangeState = this.onPopupChangeState.bind(this);
			this.addReview = this.addReview.bind(this);
		}

		onPopupChangeState(evt) {
			evt.preventDefault();
			this.setState(extend(this.state, {isPopupOpen: !this.state.isPopupOpen}))
		}

		addReview(newReview) {
			this.props.addReview(newReview);
		}

		render() {
			return(
				<Component 
					isPopupOpen={this.state.isPopupOpen}
					onPopupChangeState={this.onPopupChangeState}
					reviews={this.props.reviews}
					addReview={this.addReview}
				/>
			);
		}
	}
	
	WithReviews.propTypes = {
		reviews: PropTypes.array.isRequired,
		addReview: PropTypes.func.isRequired,
	};

	const mapStateToProps = (state) => ({
		reviews: state.reviews,
	});

	const mapDispatchToProps = (dispatch) => ({
		addReview(review) {
			dispatch(addReviewAction(review));
		}
	});

	return connect(mapStateToProps, mapDispatchToProps)(WithReviews);
};
