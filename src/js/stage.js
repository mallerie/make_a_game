import { GAME_WIDTH, GAME_HEIGHT } from './game_data';

export default class Stage {

  render() {
    return `
      <div
        style="width: ${GAME_WIDTH}px; height: ${GAME_HEIGHT}px;"
        class="game">
          <h1>"Learn American Sign Language...OR DIE!"</h1>
          <h1> - the game</h1>
          <div class="round">
          </div>
      </div>
    `;
  }

}