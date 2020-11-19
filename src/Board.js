import React from 'react';
import Tile from './Tile.js';
import data from './data.js'


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      0: false,
      1: false,
      2: false,
      3: false,
      // 4: false,
      // 5: false,
      // 6: false,
      // 7: false,
      // 8: false,
      // 9: false,
      // 10: false,
      twoCardsCurrentlyFlipped: [],
      permanentlyFlippedCards: []
    };
    this.flipCard = this.flipCard.bind(this);
  }
  flipCard(id){
    let currentCards = this.state.twoCardsCurrentlyFlipped;
    currentCards.push(id)
    this.setState({
      [id]: !this.state[id],
      twoCardsCurrentlyFlipped: currentCards
    })
    if (this.state.twoCardsCurrentlyFlipped.length === 2) {
      let cardIdOne = this.state.twoCardsCurrentlyFlipped[0];
      let cardIdTwo = this.state.twoCardsCurrentlyFlipped[1];
      let cardAvatarOne = this.state.data[cardIdOne].avatar;
      let cardAvatarTwo = this.state.data[cardIdTwo].avatar;
      // console.log(this.state.data[0].avatar, this.state.data[1].avatar, this.state.data[2].avatar)
      // console.log(cardAvatarOne, cardAvatarTwo)

        if (cardAvatarOne === cardAvatarTwo) {
          console.log('MATCH: ', cardAvatarOne, cardAvatarTwo);
          this.setState({
            twoCardsCurrentlyFlipped: [],
            // permanentlyFlippedCards
            permanentlyFlippedCards: [ ...this.state.permanentlyFlippedCards, ...[cardIdOne, cardIdTwo] ]

          })
        } 
        else {
          console.log('NO MATCH')
          this.setState({
            [cardIdOne]: false,
            [cardIdTwo]: false,
            twoCardsCurrentlyFlipped: []
          })
      
        }
        // console.log(cardIdOne,cardIdTwo, cardAvatarOne)
    }
  }
  
  render() {
    // console.log(data)
    return (
      <div>
        {this.state.data.map((tile) => <Tile key={tile.id} tile={tile} flipInfo={this.state} flipCard={this.flipCard} permanentlyFlippedCards={this.state.permanentlyFlippedCards} twoCardsCurrentlyFlipped={this.state.twoCardsCurrentlyFlipped} />)}
      </div>
    );
  }
}

export default Board;
  