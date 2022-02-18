/** @format */

import React from "react";
import "../styles/Card.css";

export default function Card({ index, strings, clickHandler }) {
	const dogName = strings.dogs[index];
	let imgSrc;

	switch (index) {
		case 0:
			imgSrc = require("../images/dog1.jpg");
			break;
		case 1:
			imgSrc = require("../images/dog2.jpg");
			break;
		case 2:
			imgSrc = require("../images/dog3.jpg");
			break;
		case 3:
			imgSrc = require("../images/dog4.jpg");
			break;
		case 4:
			imgSrc = require("../images/dog5.jpg");
			break;
		case 5:
			imgSrc = require("../images/dog6.jpg");
			break;
		case 6:
			imgSrc = require("../images/dog7.jpg");
			break;
		case 7:
			imgSrc = require("../images/dog8.jpg");
			break;
		case 8:
			imgSrc = require("../images/dog9.jpg");
			break;
		case 9:
			imgSrc = require("../images/dog10.jpg");
			break;
		case 10:
			imgSrc = require("../images/dog11.jpg");
			break;
		case 11:
			imgSrc = require("../images/dog12.jpg");
			break;
		default:
			imgSrc = "https://via.placeholder.com/100";
	}

	return (
		<div className={`Card`} onClick={clickHandler}>
			<div className={`Card__Image`} style={{ backgroundImage: `url(${imgSrc})` }}></div>
			<div className={`Card__Text`}>
				<h2>{dogName}</h2>
			</div>
		</div>
	);
}
