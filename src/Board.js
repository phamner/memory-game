import React from 'react';
import Tile from './Tile.js';
import data from './data.js'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      tilePairOne: false,
      tilePairTwo: false,
      tilePairThree: false,
      tilePairFour: false,
      tilePairFive: false,
      tilePairSix: false,
      tilePairSeven: false,
      tilePairEight: false,
      tilePairNine: false,
      tilePairTen: false
    };
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(id){
    console.log(id)
  }
  
  render() {
    // console.log(data)
    return (
      <div>
        <h1>This is the board</h1>
        {this.state.data.map((tile) => <Tile key={tile.id} tile={tile} flipCard={this.flipCard} />)}

      </div>
    );
  }
}

export default Board;
  