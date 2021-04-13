import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reviews} from './store/reviews';
import moment from 'moment';
import 'moment/locale/ru';

import './sass/style.scss';

moment.locale('ru');

const store = createStore(
	reviews,
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

