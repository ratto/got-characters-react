import axios from 'axios';
import Character from '../types/Character';

export const loadCharacters = async () => {
  const charactersResponse = axios.get(`https://thronesapi.com/api/v2/Characters`).then(res => {
    return res.data;
  });

  const characterList = await Promise.all([charactersResponse]);
  const characters: Character[] = characterList.reduce((list, character) => {
    const newChar: Character = {
      id: character.id,
      firstName: character.firstName,
      lastName: character.lastName,
      title: character.title,
      family: character.family,
      imageUrl: character.imageUrl,
    };

    list.push(newChar);
  });

  return characters;
};
