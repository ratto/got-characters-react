import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_CHARACTERS:
      return { ...state, characters: action.payload };
  }
  return { ...state };
};
