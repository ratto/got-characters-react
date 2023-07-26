import * as types from './types';

export const getCharacters = async (dispatch) => {
  try {
    const charactersRaw = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await charactersRaw.json();
    dispatch({ type: types.GET_CHARACTERS, payload: characters });
  } catch (e) {
    console.error(e);
  }
};
