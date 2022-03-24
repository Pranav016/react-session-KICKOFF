const { createContext, useState, useContext } = require('react');

export const FootballContext = createContext();

export function useFootballContext() {
	return useContext(FootballContext);
}

function FootballProvider({ children }) {
	const [leagues, setLeagues] = useState([]);
	function getLeagues() {
		fetch('http://api-football-standings.azharimm.site/leagues')
			.then((res) => res.json())
			.then((d) => setLeagues(d.data))
			.catch((err) => console.log(err));
	}
	let value = { leagues, setLeagues, getLeagues };
	return (
		<FootballContext.Provider value={value}>
			{children}
		</FootballContext.Provider>
	);
}

export default FootballProvider;
