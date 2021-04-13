import React from "react";

import Slider from './slider';
import Tabs from './tabs';

const VehicleCard = () => {
	return (
		<section className="vehicle-card">
			<div className="vehicle-main">

				<Slider />

				<div className="vehicle-card__info">
					<h2 className="vehicle-card__title">Марпех 11</h2>
					<ul className="vehicle-card__specifications">
						<li className="vehicle-card__specifications-item vehicle-card__specifications-item--engine-type">бензин</li>
						<li className="vehicle-card__specifications-item vehicle-card__specifications-item--gearbox">механика</li>
						<li className="vehicle-card__specifications-item vehicle-card__specifications-item--horsepower">100 л.с.</li>
						<li className="vehicle-card__specifications-item vehicle-card__specifications-item--engine-volume">1.4 л.</li>
					</ul>
					<div className="vehicle-card__price">
						<p className="vehicle-card__discount-price">2 300 000 ₽</p>
						<p className="vehicle-card__full-price">2&nbsp; 400 000 ₽</p>
					</div>
					<a className="vehicle-card__request-button" href="#top">оставить заявку</a>
					<a className="vehicle-card__credit-button" href="#top">В КРЕДИТ ОТ 11 000 ₽</a>
				</div>
			</div>
			<Tabs />
		</section>
	);
};

export default VehicleCard;
