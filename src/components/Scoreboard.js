/** @format */

import React, { useState } from "react";

export default function Scoreboard({ strings, score, highScore }) {
	return (
		<div className='Scoreboard'>
			<span className='Scoreboard__Score'>
				{strings.score}: {score}
			</span>
			<span className='Scoreboard__Highscore'>
				{strings.highscore}: {highScore}
			</span>
		</div>
	);
}
