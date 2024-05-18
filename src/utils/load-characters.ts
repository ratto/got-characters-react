/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Character from '../types/Character';

export const loadCharacters = async (): Promise<Character[]> => {
  const charactersResponse = axios.get(`https://thronesapi.com/api/v2/Characters`).then(res => {
    return res.data;
  });

  const characterList: any[] = await Promise.all([charactersResponse]);
  const characters: Character[] = characterList[0].reduce((list: Character[], character: any) => {
    const newChar: Character = {
      id: character.id,
      firstName: character.firstName,
      lastName: character.lastName,
      title: character.title,
      family: character.family,
      imageUrl: character.imageUrl,
    };

    list.push(newChar);
    return list;
  }, []);

  return characters;
};
