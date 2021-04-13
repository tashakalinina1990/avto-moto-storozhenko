import React from "react";

import logoPicture from '../images/logo.svg';

const Header = () => {
	return (
	<header className="header">
		<div className="header-menu">
			<a href="#top" className="header-menu__logo">
				<img src={logoPicture} alt="Логотип АВТО-МОТО"/>
			</a>
			<nav className="navigation">
				<ul className="navigation__list navigation__list--header">
					<li className="navigation__item">
						<a className="navigation__link" href="#top">
							Автомобили
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#top">
							Контакты
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#top">
							Услуги
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#top">
							Вакансии
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	);
};

export default Header;
