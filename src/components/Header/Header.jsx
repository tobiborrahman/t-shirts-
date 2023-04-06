import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/tshirts">T-Shirts</Link>
				<Link to="/order">Order Review</Link>
			</nav>
		</div>
	);
};

export default Header;
