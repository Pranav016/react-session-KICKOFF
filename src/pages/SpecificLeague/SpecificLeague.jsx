import React, { useEffect } from 'react';
import { useFootballContext } from '../../context/FootballContext';
import { useParams } from 'react-router-dom';
import './SpecificLeague.css';

const SpecificLeague = () => {
	const { leagueId } = useParams();
	const { getSpecificLeague, specificLeague, setSpecificLeague } =
		useFootballContext();
	useEffect(() => {
		getSpecificLeague({ leagueId });
		return () => {
			setSpecificLeague([]);
		};
	}, []);
	return (
		<div className='specificLeague'>
			<span>
				<img
					alt='SpecificLeagueImage'
					src={specificLeague.logos?.light}
				/>
			</span>
			<span>{specificLeague.abbr}</span>
			<span>{specificLeague.name}</span>
		</div>
	);
};

export default SpecificLeague;
