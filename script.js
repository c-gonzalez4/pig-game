'use strict';

//selecting the elements
let scorePlayer1 = document.querySelector('#score--0');
let scorePlayer2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

dice.classList.add('hidden');
