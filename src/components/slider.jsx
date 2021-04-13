import React from 'react';
import PropTypes from 'prop-types';

import {Slides} from '../mock/mocks';
import {withSlider} from '../hocs/with-slider';

const Slider = (props) => {
	const SLIDES_AMOUNT = Slides.length - 1;
	const {onNextSlide, onPreviousSlide, mainSlide} = props;
	return (
		<div className="slider">
			<div className="slider__main-slide">
				<span className="slider__flag">new model</span>
				<img className="slider__main-img" src={Slides[mainSlide]} alt="Фото автомашины Вашей мечты"/>
			</div>
			<div className="slider__controls">
				<button className={`slider__arrow slider__arrow--before ${mainSlide === 0 ? "slider__arrow--disabled" : ""}`} onClick={onPreviousSlide} disabled={mainSlide === 0 ? "disabled" : ""}></button>
				<ul className="slider__images-list">
					{Slides.map(function(slide, i) {
						return (
							<li className="slider__images-list-item" key={i}>
							<img className="slider__mini-img" src={slide} alt="Маленькое фото автомашины Вашей мечты"/>
							</li>
						);
					})}
				</ul>
				<button className={`slider__arrow slider__arrow--after ${SLIDES_AMOUNT === mainSlide ? "slider__arrow--disabled" : ""}`} onClick={onNextSlide} disabled={SLIDES_AMOUNT === mainSlide ? "disabled" : ""}></button>
			</div>
		</div>
	);
};

Slider.propTypes = {
	onNextSlide: PropTypes.func.isRequired,
	onPreviousSlide: PropTypes.func.isRequired,
	mainSlide: PropTypes.number.isRequired,
};

export default withSlider(Slider);
