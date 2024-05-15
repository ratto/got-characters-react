import { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { loadCharacters } from '../../utils/load-characters';
import { CharactersDeck } from '../CharactersDeck';
import Character from '../../types/Character';
import './style.scss';

const App = () => {
  const [characters, setCharacters] = useState([] as Character[]);

  const handleLoadCharacters = useCallback(async () => {
    const characterList = await loadCharacters();

    setCharacters(characterList);
  }, []);

  useEffect(() => {
    handleLoadCharacters();
  }, [handleLoadCharacters]);

  return (
    <Container fluid as={'main'}>
      <h1>Game of Thrones Character List</h1>
      <CharactersDeck characters={characters} />
    </Container>
  );
};

export default App;
