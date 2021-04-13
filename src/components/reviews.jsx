import React from 'react';
import PropTypes from 'prop-types';

import {withReviews} from '../hocs/with-reviews';
import Popup from './popup';

const Reviews = (props) => {
	const {onPopupChangeState, isPopupOpen, reviews, addReview} = props;
	return (
		<div className="reviews">
			<a className="reviews__add-review-button" href="#top" onClick={onPopupChangeState}>оставить отзыв</a>
			<ul className="reviews__list">

				{reviews.map((review, index) => {
					return (
						<li  key={index} className="reviews__item">
							<p className="reviews__name">{review.name}</p>
							<div className="reviews__resume">
								<div className="reviews__dignity">
									<p className="reviews__title reviews__title--dignity">Достоинства</p>
									<p className="reviews__answer">{review.dignity}</p>
								</div>
								<div className="reviews__limitations">
									<p className="reviews__title reviews__title--limitations">Недостатки</p>
									<p className="reviews__answer">{review.limitations}</p>
								</div>
								<div className="reviews__comment">
									<p className="reviews__title">Комментарий</p>
									<p className="reviews__answer">{review.comment}</p>
								</div>
								<div className="reviews__rating">
									<ul className="reviews__rating-list">
										<li className={`reviews__rating-value ${review.rating >= 1 ? `reviews__rating-value--active` : `reviews__rating-value--deactive`}`} checked={review.rating === 1 ? `checked`:``}></li>
										<li className={`reviews__rating-value ${review.rating >= 2 ? `reviews__rating-value--active` : `reviews__rating-value--deactive`}`} checked={review.rating === 2 ? `checked`:``}></li>
										<li className={`reviews__rating-value ${review.rating >= 3 ? `reviews__rating-value--active` : `reviews__rating-value--deactive`}`} checked={review.rating === 3 ? `checked`:``}></li>
										<li className={`reviews__rating-value ${review.rating >= 4 ? `reviews__rating-value--active` : `reviews__rating-value--deactive`}`} checked={review.rating === 4 ? `checked`:``}></li>
										<li className={`reviews__rating-value ${review.rating >= 5 ? `reviews__rating-value--active` : `reviews__rating-value--deactive`}`} checked={review.rating === 5 ? `checked`:``}></li>
									</ul>
									<p className="reviews__rating-text">{review.rating > 3 ? `Советует` : `Не советует`}</p>
								</div>
								<div className="reviews__options">
									<p className="reviews__time">{review.time}</p>
									<a className="reviews__answer-button"href="#top">Ответить</a>
								</div>
							</div>
						</li>
					);
				})}

			</ul>
			{isPopupOpen === true && (
				<Popup isPopupOpen={isPopupOpen} onPopupChangeState={onPopupChangeState} addReview={addReview} />
			)}
		</div>
	);
};

Reviews.propTypes = {
	isPopupOpen: PropTypes.bool.isRequired,
	reviews: PropTypes.array.isRequired,
	onPopupChangeState: PropTypes.func.isRequired,
	addReview: PropTypes.func.isRequired,
};

export default withReviews(Reviews);
