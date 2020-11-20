import ReactCardFlip from 'react-card-flip';
import styled, { keyframes } from 'styled-components';
import React from 'react';




const Card = styled.button`
  background: #E78E67;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: black;
  width: 150px;
  height: 150px;

`

const BackCard = styled.button`
  background: #67BCE7;
  border-radius: 10px;
  border: 2px solid palevioletred;
  color: palevioletred;
  width: 150px;
  height: 150px;

`

const TilePhoto = styled.img`
  border-radius: 100%;
//   border: 1px solid black;
  width: 140px;
  height: 140px;
`;


class BigFlippers extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
      this.hideCard = this.hideCard.bind(this);
      this.componentDidUpdate = this.componentDidUpdate.bind(this);


    }
   
    handleClick(e) {
    //   e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    hideCard(){
        // e.preventDefault();

        this.setState({ isFlipped: false });
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        // if (this.props.userID !== prevProps.userID) {
        //   this.fetchData(this.props.userID);
        // }
        if (this.props.twoCardsCurrentlyFlipped.length === 0) {
            console.log('hide cards')
            this.hideCard()

        }
      }
      
   
    render(props) {
        
        console.log('permenantly flipped cards: ',this.props.permanentlyFlippedCards)
        // if (this.props.hideCards === true) {
        //     console.log('hide all cards');
        //     // this.hideCard()
        // }
        let buttonDisabled = false;
        if (this.props.permanentlyFlippedCards.includes(this.props.tile.id) || this.props.twoCardsCurrentlyFlipped.includes(this.props.tile.id)) {
            buttonDisabled = true;
        }
        // console.log(this.props.tile.avatar)
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <Card disabled={buttonDisabled} onClick={() => {this.handleClick(); this.props.flipCard(this.props.tile.id);}} />
          <BackCard disabled={buttonDisabled} onClick={this.handleClick}>
            <TilePhoto src={this.props.tile.avatar}/>
          </BackCard>
        </ReactCardFlip>
      )
    }
  }
  
export default BigFlippers;