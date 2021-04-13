import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';

export const withPopup = (Component) => {
	class WithPopup extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {

				name: null,
				dignity: null,
				limitations: null,
				rating: null,
				comment: null,
				time: moment(Date.parse(new Date())).fromNow(),

			}

			this.onReviewChange = this.onReviewChange.bind(this);
			this._validatingFields = this._validatingFields.bind(this);
			this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);
			this.onSubmit = this.onSubmit.bind(this);
		}

		onReviewChange(evt) {
			const {name, value} = evt.target;
			this.setState({[name]: value});
			localStorage.setItem([name], value);

			this._validatingFields(name, value, evt.target);
		}

		_validatingFields(name, value, elem) {
			if (name === `name` && value === ``) {
				elem.classList.add(`popup__required-field--invalid`);
				elem.parentNode.classList.add(`popup__required-field-wrapper`);
				return;
			}

			if (name === `comment` && value === ``) {
				elem.classList.add(`popup__required-field--invalid`);
				elem.parentNode.classList.add(`popup__required-field-wrapper`);
				return;
			}

			elem.classList.remove(`popup__required-field--invalid`);
			elem.parentNode.classList.remove(`popup__required-field-wrapper`);
		}

		onClosePopupKeydown(evt) {
			if (evt.key === `Escape`) {
				this.props.onPopupChangeState(evt);
			}
		}

		componentDidMount() {
			document.addEventListener(`keydown`, this.onClosePopupKeydown);
		}

		componentWillUnmount() {
			document.removeEventListener(`keydown`, this.onClosePopupKeydown);
		}

		onSubmit(evt) {
			evt.preventDefault();

			let validationStatus = true;

			const reqiredFields = Array.from(evt.target.parentNode.querySelectorAll(`.popup__required-field`));

			reqiredFields.forEach((field) => {
				if (field.value === ``) {
					field.classList.add(`popup__required-field--invalid`);
					field.parentNode.classList.add(`popup__required-field-wrapper`);
					validationStatus = false;
				} else {
					field.classList.remove(`popup__required-field--invalid`);
					field.parentNode.classList.remove(`popup__required-field-wrapper`);
					validationStatus = true;
				}
			})

			if (!validationStatus) {
				return;
			}

			this.props.addReview(this.state);
			this.props.onPopupChangeState(evt);
		}

		render() {
			return (
				<Component
				{...this.props}
				onReviewChange={this.onReviewChange}
				onSubmit={this.onSubmit}
				onClosePopupKeydown={this.onClosePopupKeydown}
				/>
			);
		}
	}

	WithPopup.propTypes = {
		isPopupOpen: PropTypes.bool.isRequired,
		reviews: PropTypes.array.isRequired,
		onPopupChangeState: PropTypes.func.isRequired,
		addReview: PropTypes.func.isRequired,
	};

	const mapStateToProps = (state) => ({
		reviews: state.reviews,
	});

	return connect(mapStateToProps)(WithPopup);
};
