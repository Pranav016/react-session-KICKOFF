import React from 'react';
import './LeagueCard.css';

const LeagueCard = ({ id, logo, name, abbr }) => {
	return (
		<div className='league'>
			<span>
				<img alt='LeagueImage' src={logo} />
			</span>
			<span>{abbr}</span>
			<span>{name}</span>
		</div>
	);
};

export default LeagueCard;
