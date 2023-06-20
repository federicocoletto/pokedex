import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexName from './pages/PokedexName'

function App() {


	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='/pokedex' element={<Pokedex />} />
					<Route path='/pokedex/:name' element={<PokedexName />} />
				</Route>
				
			</Routes>
		</>
	)
}

export default App
