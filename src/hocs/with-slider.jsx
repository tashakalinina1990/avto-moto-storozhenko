import React, {PureComponent} from 'react';

import {Slides} from '../mock/mocks';
import {extend} from '../utils/utils';
const SLIDES_AMOUNT = Slides.length - 1;

export const withSlider = (Component) => {
	class WithSlider extends PureComponent {
		constructor(props) {
			super(props);

			this.state = {
				mainSlide: 0,
			}

			this.onNextSlide = this.onNextSlide.bind(this);
			this.onPreviousSlide = this.onPreviousSlide.bind(this);
		}

		onNextSlide() {
			if (this.state.mainSlide !== SLIDES_AMOUNT) {
				this.setState(extend(this.state, {mainSlide: this.state.mainSlide + 1}));
			}
		}

		onPreviousSlide() {
			if (this.state.mainSlide !== 0) {
				this.setState(extend(this.state, {mainSlide: this.state.mainSlide - 1}));
			}
		}

		render() {
			return (
				<Component
					{...this.props}
					onNextSlide={this.onNextSlide}
					onPreviousSlide={this.onPreviousSlide}
					mainSlide={this.state.mainSlide}
				/>
			);
		}
	}

	return WithSlider;
};
