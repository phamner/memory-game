import React from 'react';
// import Tile from './Tile.js';
import data from './data.js';
import styled from 'styled-components';
import BigFlippers from './BigFlippers.js'

const CardContainer = styled.div`
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
`;




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
      permanentlyFlippedCards: [],
      hideCards: false,
    };
    this.flipCard = this.flipCard.bind(this);
  }
  flipCard(id){
    let currentCards = this.state.twoCardsCurrentlyFlipped;
    currentCards.push(id)

    if (this.state.twoCardsCurrentlyFlipped.length < 3) {
      this.setState({
        [id]: !this.state[id],
        twoCardsCurrentlyFlipped: currentCards
      })
      if (this.state.twoCardsCurrentlyFlipped.length === 2) {
        let cardIdOne = this.state.twoCardsCurrentlyFlipped[0];
        let cardIdTwo = this.state.twoCardsCurrentlyFlipped[1];
        let cardAvatarOne = this.state.data[cardIdOne].avatar;
        let cardAvatarTwo = this.state.data[cardIdTwo].avatar;
  
        if (cardAvatarOne === cardAvatarTwo) {
          console.log('MATCH: ', cardAvatarOne, cardAvatarTwo);
          this.setState({
            twoCardsCurrentlyFlipped: [],
            permanentlyFlippedCards: [ ...this.state.permanentlyFlippedCards, ...[cardIdOne, cardIdTwo] ]
  
          })
        } 
        else {
          console.log('NO MATCH', cardIdOne, cardIdTwo)
          this.setState({
            [cardIdOne]: false,
            [cardIdTwo]: false,
            twoCardsCurrentlyFlipped: [],
          })
          // this.setState({
          //   hideCards: false
          // })

        }
      }
      // if (this.state.permanentlyFlippedCards.length === 20) {
      //   alert('YOU FOUND ALL THE ROBOTS')
      // }
    }
  }
  
  render() {
    // let shuffledCards = this.state.data.sort(() => Math.random() - 0.5)


    return (
      <div>
        <CardContainer>
          {/* {this.state.data.map((tile) => <Tile key={tile.id} tile={tile} flipInfo={this.state} flipCard={this.flipCard} permanentlyFlippedCards={this.state.permanentlyFlippedCards} twoCardsCurrentlyFlipped={this.state.twoCardsCurrentlyFlipped} />)} */}
         {this.state.data.map((tile) => <BigFlippers key={tile.id} hideCards={this.state.hideCards} tile={tile} flipInfo={this.state} flipCard={this.flipCard} permanentlyFlippedCards={this.state.permanentlyFlippedCards} twoCardsCurrentlyFlipped={this.state.twoCardsCurrentlyFlipped} />)}
        </CardContainer>
      </div>
    );
  }
}

export default Board;
  