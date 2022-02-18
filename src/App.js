/** @format */

import "./styles/App.css";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

function App() {
	return (
		<div className='App'>
			<nav>
				<Scoreboard />
			</nav>
			<Card />
		</div>
	);
}

export default App;
