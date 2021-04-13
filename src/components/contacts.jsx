import React from 'react';

const Contacts = () => {
	return (
		<div className="contacts">
			<ul className="contacts__info">
				<li className="contacts__info-item">
					<h3 className="contacts__title contacts__title--address">Адрес</h3>
					<p className="contacts__text">Санкт-Петербург,<br/>набережная реки Карповки, дом 5</p>
				</li>
				<li className="contacts__info-item">
					<h3 className="contacts__title">Режим работы</h3>
					<p className="contacts__text">Ежедневно, с 10:00 до 21:00</p>
				</li>
				<li className="contacts__info-item">
					<h3 className="contacts__title">Телефон</h3>
					<p className="contacts__text">8 (800) 333-55-99</p>
				</li>
				<li className="contacts__info-item">
					<h3 className="contacts__title">E-mail</h3>
					<p className="contacts__text">info@avto-moto.ru</p>
				</li>
			</ul>
			<iframe className="contacts__map" title="Карта с расположением нашего дилерского центра" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab788d2076a07b067c75e15a21bf89632daacb0f0256c3653ff8c875fea49c247&amp;source=constructor" width="431" height="271" style={{border:0}}></iframe>
		</div>
	);
};

export default Contacts;
