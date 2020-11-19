import React from 'react';
import Tile from './Tile.js';
import data from './data.js'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
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
    // console.log(data)
    return (
      <div>
        <h1>This is the board</h1>
        {this.state.data.map((tile) => <Tile key={tile.id} tile={tile} />)}

      </div>
    );
  }
}

export default Board;
  