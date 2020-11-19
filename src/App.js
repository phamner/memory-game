import logo from './logo.svg';
import './App.css';
import Board from './Board';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: auto;   
`;




function App() {
  return (
    <AppContainer >
      <h1>Robot Memory Game</h1>
      <Board />
    </AppContainer>
  );
}

export default App;
