import React from "react";

// import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import CharacterPage from "./pages/Character";

function App() {
  	return (
		<Routes>
			<Route path="/home" element={<Home/>}/>
			<Route path="/characters" element={<CharacterPage/>}/>
		</Routes>
	)
}

export default App;