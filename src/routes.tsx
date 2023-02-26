import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Character from './components/Character';
import Start from './pages/Start/Start';

export default function AppRouter() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/:id" element={<Character />} />
				</Routes>
			</Router>
		</>
	)
}