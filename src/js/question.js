// import questionsBank from './game_data';

var Question = class Question {
  constructor( image, choices, correct_choice ) {
    this.image = image;
    this.choices = choices;
    this.correct_choice = correct_choice;
  }

}


export default Question;