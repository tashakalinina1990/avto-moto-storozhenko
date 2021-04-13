import React from 'react';

import Header from './components/header';
import VehicleCard from './components/vehicle-card';
import Footer from './components/footer';

const App = () => {
	return (
		<React.Fragment>
			<Header/>
			<main>
				<VehicleCard/>
			</main>
			<Footer/>
		</React.Fragment>
	);
}

export default App;
