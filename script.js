'use strict';

//selecting the elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
//intiating the conditions

const finalScores = [ 0, 0 ];
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
let currentScore = 0;
let activePlayer = 0;

const switchingPlayer = function() {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;

	//toggling making sure the element is only on one class at a time
	player1.classList.toggle('player--active');
	player2.classList.toggle('player--active');
};
//hiding the dice
dice.classList.add('hidden');

btnRoll.addEventListener('click', function() {
	const diceRoll = Math.trunc(Math.random() * 6) + 1;

	//displaying the dice
	dice.classList.remove('hidden');
	dice.src = `dice-${diceRoll}.png`;

	//check if the rolled dice is a one if it is
	//switch players if not add the points together
	if (diceRoll !== 1) {
		currentScore += diceRoll;
		document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
	} else {
		switchingPlayer();
	}
});

btnHold.addEventListener('click', function() {
	//adding the current score of the player to the total score

	finalScores[activePlayer] += currentScore;
	document.querySelector(`#score--${activePlayer}`).textContent = finalScores[activePlayer];

	if (finalScores[activePlayer] >= 100) {
		document.querySelector(``);
	}
	//switching to the next player
	switchingPlayer();
});
