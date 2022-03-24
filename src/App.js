import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FootballProvider from './context/FootballContext';
import Home from './pages/Home/Home';
import SpecificLeague from './pages/SpecificLeague/SpecificLeague';

function App() {
	return (
		<FootballProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} index />
					<Route path='/:leagueId' element={<SpecificLeague />} />
				</Routes>
				<div className='App'></div>
			</BrowserRouter>
		</FootballProvider>
	);
}

export default App;
