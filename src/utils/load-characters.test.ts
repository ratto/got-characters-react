import axios from 'axios';
import { describe, vi } from 'vitest';
import { loadCharacters } from './load-characters';
import Character from '../types/Character';

vi.mock('axios');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedCharactersResponse: any[] = [
  {
    id: 0,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    fullName: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    family: 'House Targaryen',
    image: 'daenerys.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
  },
  {
    id: 1,
    firstName: 'Samwell',
    lastName: 'Tarly',
    fullName: 'Samwell Tarly',
    title: 'Maester',
    family: 'House Tarly',
    image: 'sam.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/sam.jpg',
  },
  {
    id: 2,
    firstName: 'Jon',
    lastName: 'Snow',
    fullName: 'Jon Snow',
    title: 'King of the North',
    family: 'House Stark',
    image: 'jon-snow.jpg',
    imageUrl: 'https://thronesapi.com/assets/images/jon-snow.jpg',
  },
];

const mockedCharacters: Character[] = [
  {
    id: 0,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    title: 'Mother of Dragons',
    family: 'House Targaryen',
    imageUrl: 'https://thronesapi.com/assets/images/daenerys.jpg',
  },
  {
    id: 1,
    firstName: 'Samwell',
    lastName: 'Tarly',
    title: 'Maester',
    family: 'House Tarly',
    imageUrl: 'https://thronesapi.com/assets/images/sam.jpg',
  },
  {
    id: 2,
    firstName: 'Jon',
    lastName: 'Snow',
    title: 'King of the North',
    family: 'House Stark',
    imageUrl: 'https://thronesapi.com/assets/images/jon-snow.jpg',
  },
];

describe('load-characters test suite', () => {
  it('should load all the characters from the fake API server', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockedCharactersResponse });

    const characters = await loadCharacters();

    expect(characters).toStrictEqual(mockedCharacters);
  });
});
