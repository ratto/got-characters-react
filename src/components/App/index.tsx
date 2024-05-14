import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { CharacterCard } from '../CharacterCard';
import './style.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid as={'main'}>
      <h1>Game of Thrones Character List</h1>
      <CharacterCard count={count} setCountFn={() => setCount(count => count + 1)} />
    </Container>
  );
}

export default App;
