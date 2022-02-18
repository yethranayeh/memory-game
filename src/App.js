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
		if (clicked.includes(index)) {
			setClicked([]);
			setScore(0);
		} else {
			setClicked([...clicked, index]);
			setScore(score + 1);
		}
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
				<select onChange={handleLanguageChange}>
					<option value='en'>English</option>
					<option value='tr'>Türkçe</option>
				</select>
				<Scoreboard strings={lang.scoreboard} score={score} highScore={highScore} />
			</nav>
			<button onClick={shuffleOrder}>Shuffle</button>
			<main className='App__Cards'>
				{cardOrder.map((index) => (
					<Card key={index} index={index} strings={lang.card} clickHandler={shuffleOrder} />
				))}
			</main>
		</div>
	);
}

export default App;
