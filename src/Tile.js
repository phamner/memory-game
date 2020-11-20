// import React from 'react';
// import styled, { keyframes } from 'styled-components';

// const fadeIn = keyframes`
//   from {
//     // transform: scale(.50);
//     opacity: 0;
//   }

//   to {
//     // transform: scale(1);
//     opacity: 1;
//   }
// `;

// const fadeOut = keyframes`
//   from {
//     // transform: scale(1);
//     opacity: 0;
//   }

//   to {
//     // transform: scale(.50);
//     opacity: 1;
//   }
// `;


// const Button = styled.button`
//   background: pink;
//   border-radius: 10px;
// //   border: 2px solid palevioletred;
//   color: palevioletred;
// //   margin: 0 1em;
// //   padding: 0.25em 1em;
//   width: 150px;
//   height: 150px;

// `

// const TilePhoto = styled.img`
// //   border-radius: 100%;
// //   border: 1px solid black;
//   width: 140px;
//   height: 140px;
//   visibility: ${props => props.selected ? "visible" : "hidden"};
//   animation: ${props => props.selected ? fadeOut : fadeIn} 1s linear;
// //   animation: 1s linear;

// //   transition: visibility 1s linear;
// //   transform: rotateY(180deg);
// `;

// // const FlipCard = styled.div`
// //     background-color: transparent;
// //     width: 300px;
// //     height: 200px;
// //     border: 1px solid #f1f1f1;
// //     perspective: 1000px; /* Remove this if you don't want the 3D effect */
// // `;

// // /* This container is needed to position the front and back side */
// // const FlipCardInner = styled.div`
// //     position: relative;
// //     width: 100%;
// //     height: 100%;
// //     text-align: center;
// //     transition: transform 0.8s;
// //     transform-style: preserve-3d;
// // `;

// // /* Do an horizontal flip when you move the mouse over the flip box container */
// // //   .flip-card:hover .flip-card-inner {
// // //     transform: rotateY(180deg);
// // //   }

// // /* Position the front and back side */
// // const FlipCardFront = styled.div`
// //     position: absolute;
// //     width: 100%;
// //     height: 100%;
// //     // -webkit-backface-visibility: hidden; /* Safari */
// //     backface-visibility: hidden;
// //     background-color: #bbb;
// //     color: black;
// // `;

// // const FlipCardBack = styled.div`
// //     position: absolute;
// //     width: 100%;
// //     height: 100%;
// //     // -webkit-backface-visibility: hidden; /* Safari */
// //     backface-visibility: hidden;
// //     background-color: dodgerblue;
// //     color: white;
// //     transform: rotateY(180deg);
// // `;





// function Tile(props) {
//     let buttonDisabled = false;
//     if (props.permanentlyFlippedCards.includes(props.tile.id) || props.twoCardsCurrentlyFlipped.includes(props.tile.id)) {
//         buttonDisabled = true;
//     }

//     return (
//         <div>
//             <Button disabled={buttonDisabled} onClick={() => props.flipCard(props.tile.id)}>
//                 <TilePhoto selected={props.flipInfo[props.tile.id]} src={props.tile.avatar} />
//             </Button>

//             {/* <div class="FlipCard">
//                 <div class="FlipCardInner">
//                     <div class="FlipCardFront">
//                         <img src="https://robohash.org/nobisquibusdamet.jpg?size=100x100&set=set1" alt="Avatar" />
//                     </div>
//                     <div class="flip-card-back">
//                         <h1>John Doe</h1>
//                         <p>Architect and Engineer</p>
//                         <p>We love that guy</p>
//                     </div>
//                 </div>
//             </div> */}
        
//         </div>

        

    

//     );
// }

// export default Tile;
