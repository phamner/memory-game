import React from 'react';
import Tile from './Tile.js';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileOne: false,
      tileTwo: false,
      tileThree: false,
      tileFour: false,
      tileFive: false,
      tileSix: false,
      tileSeven: false,
      tileEight: false,
      tileNine: false,
      tileTen: false
    };
  }

  render() {
    return (
      <div>
        <h1>This is the board</h1>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />

      </div>
    );
  }
}

export default Board;
  