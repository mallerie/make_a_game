export var GAME_HEIGHT = 800;
export var GAME_WIDTH = 1300;

import score from './index'

var questionsBank = [
  {
    image: `<img src="./images/welcome_asl.gif">`,
    choices: ['welcome', 'black', 'carnival', 'milk'],
    correct_choice: 'welcome',
  },
  
  {
    image: `<img src="./images/garage_asl.gif">`,
    choices: ['cheese', 'friend', 'garage', 'telephone'],
    correct_choice: 'garage',
  },
    
  {
    image:`<img src="./images/pineapple_asl.gif">`,
    choices: ['handle', 'pineapple', 'cold', 'elephant'],
    correct_choice: 'pineapple',
  },

  {
    image: `<img src="./images/scarf_asl.gif">`,
    choices: ['time', 'never', 'cow', 'scarf'],
    correct_choice: 'scarf',
  },
  {
    image: `<img src="./images/approximately_asl.gif">`,
    choices: ['because', 'approximately', 'sister', 'many'],
    correct_choice: 'approximately',
  },
  {
    image: `<img src="./images/level_complete.png">`,
    choices: ['Did I Win or Lose?'],
    correct_choice: '',
  }
  // {
  //   image: `<img src="./images/red_asl.gif">`,
  //   choices: ['yellow', 'blue', 'green', 'red'],
  //   correct_choice: 'red',
  // }
];

export default questionsBank;

