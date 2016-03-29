// Javascript Entry Point

import $ from 'jquery';

import Stage from './stage';
import questionsBank from './game_data';
import Question from './question';


var stage = new Stage();
var $stage = $(stage.render());
$('.app').append($stage);


var currentQuestion = 0;
var roundSelections = [];
var score = [];


$('.app').on('click', 'button', event => {

  var correct = $(event.target).data('is-correct');

  if (currentQuestion <= 4 && correct) {
    score++;
    currentQuestion++;
    renderQuestion();
      console.log('q', currentQuestion);
    console.log('score',score);
  } else if (currentQuestion <= 4 && !correct) {
    score = score + 0;
    currentQuestion++;
    renderQuestion();
    console.log('score', score);
      console.log('q', currentQuestion);
  } else if (currentQuestion = 4 && score >= 3) {
      $('.round').html(renderWinScreen());// console.log('you win!!');
      // document.write('you win');
  } else if (currentQuestion = 4 && score <= 3) {
      $('.round').html(renderLoseScreen());
  }
  // currentQuestion++;
  // renderQuestion();

  // if (currentQuestion <= 4) {
  //     renderQuestion(); 
  //   } else if (currentQuestion > 4 && score >= 3) {

  //   }

        // return `You got ${score} points, you iz DEAD!`
        // console.log('dead');
});


function roundTemplate(round) {
  var choices = round.choices.map(choice => {
    return `<li><button data-is-correct="${round.correct_choice === choice}">${choice}</button></li>`;
  }).join('');
 
  return `
    <div>
      ${round.image}
      <ul>${choices}</ul>
    </div>
  `;  

}

function renderQuestion() {
  var eachRound = questionsBank[currentQuestion];
  $('.round').html(roundTemplate(eachRound));
};

function renderWinScreen() {
  return `
  <div class="game-result"><h3>Thanks for Playing! You Win!<h3/></div>
  <div><img src="./images/win_asl.gif"></div>
  <div>
  `
};

function renderLoseScreen() {
  return `
  <div class="game-result"><h3>Thanks for Playing! You Lose!<h3/></div>
  <div><img src="./images/failed_asl.gif">
  `
};

renderQuestion();





