import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    // transform: scale(.50);
    opacity: 0;
  }

  to {
    // transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    // transform: scale(1);
    opacity: 0;
  }

  to {
    // transform: scale(.50);
    opacity: 1;
  }
`;


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
  width: 150px;
  height: 150px;
`

const TilePhoto = styled.img`
  border-radius: 100%;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  visibility: ${props => props.selected ? "visible" : "hidden"};
  animation: ${props => props.selected ? fadeOut : fadeIn} 1s linear;
//   animation: 1s linear;

//   transition: visibility 1s linear;
  transform: rotateY(180deg);

`;


function Tile(props) {
    let buttonDisabled = false;
    if (props.permanentlyFlippedCards.includes(props.tile.id) || props.twoCardsCurrentlyFlipped.includes(props.tile.id)) {
        buttonDisabled = true;
    }

    return (
        <div>
        <Button disabled={buttonDisabled} onClick={() => props.flipCard(props.tile.id)}>
            <TilePhoto selected={props.flipInfo[props.tile.id]} src={props.tile.avatar}/>
        </Button>
        </div>
    );
}

export default Tile;
