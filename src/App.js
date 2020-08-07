import React, {useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import { getAll } from './api';
import {CouponContainer} from './coupons/coupons-container';

function App() {

  const fetchCoupons = () => {
		getAll().then((res) => {
			console.log({res})
		});
	};

	useEffect(() => {
		fetchCoupons();
  }, []);
  
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<CouponContainer />
			</header>
		</div>
	);
}

export default App;
