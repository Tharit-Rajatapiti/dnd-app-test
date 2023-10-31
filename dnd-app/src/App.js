import React from "react";

// styling for the react-bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

// general styling
import './App.css';

import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home";
import CharacterPage from "./pages/Character";
import SkillsPage from "./pages/Skills";
import SpellsPage from "./pages/Spells";

function App() {
  	return (
		<Routes>
			<Route path="/home" element={<HomePage/>}/>
			<Route path="/characters" element={<CharacterPage/>}/>
			<Route path="/skills" element={<SkillsPage/>}/>
			<Route path="/spells" element={<SpellsPage/>}/>
		</Routes>
	)
}

export default App;