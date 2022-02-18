/** @format */

import "./styles/App.css";
import english from "./lang/en.json";
import turkish from "./lang/tr.json";
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
	const [score, setScore] = useState(0);
	const localHighScore = Number(localStorage.getItem("highScore"));
	// No fallback if localStorage is empty, because "null" converted to Number type is 0
	const [highScore, setHighScore] = useState(localHighScore);
	const [lang, setLang] = useState(english);
	const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
	const [clicked, setClicked] = useState([]);

	const handleLanguageChange = (e) => {
		if (e.target.value === "en") {
			setLang(english);
		} else if (e.target.value === "tr") {
			setLang(turkish);
		}
	};

	const handleCardClick = (index) => {
		// If the card has already been clicked, reset the game
		if (clicked.includes(index)) {
			setScore(0);
			setClicked([]);
			if (score > highScore) {
				setHighScore(score);
				localStorage.setItem("highScore", score);
			}
		} else {
			setScore(score + 1);
			setClicked([...clicked, index]);
		}
		shuffleOrder();
	};

	const shuffleOrder = () => {
		let shuffled = cardOrder
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		setCardOrder(shuffled);
	};

	return (
		<div className='App'>
			<nav className='App__Navbar'>
				<div className='App__Navbar-Intro'>
					<h1>{lang.title}</h1>
					<p>{lang.description}</p>
					<select onChange={handleLanguageChange}>
						<option value='en'>English</option>
						<option value='tr'>Türkçe</option>
					</select>
				</div>
				<div className='App__Navbar-Info'>
					<Scoreboard strings={lang.scoreboard} score={score} highScore={highScore} />
				</div>
			</nav>
			<main className='App__Cards'>
				{cardOrder.map((index) => (
					<Card key={index} index={index} strings={lang.card} clickHandler={handleCardClick} />
				))}
			</main>
		</div>
	);
}

export default App;
