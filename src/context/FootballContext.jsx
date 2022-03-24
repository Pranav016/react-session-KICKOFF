const { createContext, useState, useContext } = require('react');

export const FootballContext = createContext();

export function useFootballContext() {
	return useContext(FootballContext);
}

function FootballProvider({ children }) {
	const [leagues, setLeagues] = useState([]);
	const [specificLeague, setSpecificLeague] = useState({});
	function getLeagues() {
		fetch('http://api-football-standings.azharimm.site/leagues')
			.then((res) => res.json())
			.then((d) => setLeagues(d.data))
			.catch((err) => console.log(err));
	}
	function getSpecificLeague({ leagueId }) {
		fetch(`http://api-football-standings.azharimm.site/leagues/${leagueId}`)
			.then((res) => res.json())
			.then((d) => setSpecificLeague(d.data))
			.catch((err) => console.log(err));
	}
	let value = {
		leagues,
		setLeagues,
		getLeagues,
		specificLeague,
		setSpecificLeague,
		getSpecificLeague,
	};
	return (
		<FootballContext.Provider value={value}>
			{children}
		</FootballContext.Provider>
	);
}

export default FootballProvider;
