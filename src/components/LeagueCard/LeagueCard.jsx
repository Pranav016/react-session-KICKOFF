import React from 'react';
import { Link } from 'react-router-dom';
import './LeagueCard.css';

const LeagueCard = ({ id, logo, name, abbr }) => {
	return (
		<div className='league'>
			<span>
				<img alt='LeagueImage' src={logo} />
			</span>
			<span>
				<Link to={`/${id}`}>{abbr}</Link>
			</span>
			<span>{name}</span>
		</div>
	);
};

export default LeagueCard;
