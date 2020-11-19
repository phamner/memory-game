import logo from './logo.svg';
import './App.css';
import Board from './Board';
import styled from 'styled-components';

const AppContainer = styled.div`
  // margin: auto;   
  position:absolute;
  // top: 5%;
  left: 25%;
`;

const Title = styled.h1`
text-align: center;
`;



function App() {
  return (
    <AppContainer >
      <Title>Robot Memory Game</Title>
      <Board />
    </AppContainer>
  );
}

export default App;
