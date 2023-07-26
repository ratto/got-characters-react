import P from 'prop-types';
import { useReducer } from 'react';
import { CharactersContext } from './context';
import { data } from './data';
import { reducer } from './reducer';

export const CharactersProvider = ({ children }) => {
  const [charactersState, charactersDispatch] = useReducer(reducer, data);

  return (
    <CharactersContext.Provider value={(charactersState, charactersDispatch)}>{children}</CharactersContext.Provider>
  );
};

CharactersProvider.propTypes = {
  children: P.node.isRequired,
};
