import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<ul>
				<li>
					<NavLink to='/'>Leagues</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
