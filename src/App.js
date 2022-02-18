/** @format */

import "./styles/App.css";
import english from "./lang/en.json";
import turkish from "./lang/tr.json";
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [lang, setLang] = useState(english);

	const handleLanguageChange = (e) => {
		if (e.target.value === "en") {
			setLang(english);
		} else if (e.target.value === "tr") {
			setLang(turkish);
		}
	};

	return (
		<div className='App'>
			<nav className='App__Navbar'>
				<Scoreboard strings={lang.scoreboard} score={score} highScore={highScore} />
			</nav>
			<main className='App__Cards'>
				<Card />
			</main>
		</div>
	);
}

export default App;
