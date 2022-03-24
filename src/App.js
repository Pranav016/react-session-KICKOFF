import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FootballProvider from './context/FootballContext';
import Home from './pages/Home/Home';

function App() {
	return (
		<FootballProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<div className='App'></div>
			</BrowserRouter>
		</FootballProvider>
	);
}

export default App;
