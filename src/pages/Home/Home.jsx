import React, { useEffect } from 'react';
import LeagueCard from '../../components/LeagueCard/LeagueCard';
import { useFootballContext } from '../../context/FootballContext';
import './Home.css';

const Home = () => {
	const { leagues, getLeagues, setLeagues } = useFootballContext();
	useEffect(() => {
		getLeagues();
		return () => {
			setLeagues([]);
		};
	}, []);
	return (
		<div className='leagues'>
			{leagues.map((league) => (
				<LeagueCard
					key={league.id}
					id={league.id}
					logo={league.logos.light}
					abbr={league.abbr}
					name={league.name}
				/>
			))}
		</div>
	);
};

export default Home;
