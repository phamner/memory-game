import React from 'react';
import styled from 'styled-components';


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
`;


function Tile(props) {
    // console.log(props.flipInfo[props.tile.id])
    return (
        <div>
        <Button onClick={() => props.flipCard(props.tile.id)}>
            <TilePhoto selected={props.flipInfo[props.tile.id]} src={props.tile.avatar}/>
        </Button>
        </div>
    );
}

export default Tile;
