import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Character from '../../types/Character.ts';
import App from './index.tsx';
import { loadCharacters } from '../../utils/load-characters.ts';

vi.mock('../../utils/load-characters.ts', () => ({
  loadCharacters: vi.fn(),
}));

vi.mock('../CharactersDeck', () => ({
  CharactersDeck: ({ characters }: { characters: Character[] }) => (
    <div data-testid="characters-deck">
      {characters.map(character => (
        <div key={character.id}>
          {character.firstName} {character.lastName}
        </div>
      ))}
    </div>
  ),
}));

const mockedCharacters = [
  { id: 1, firstName: 'Jon', lastName: 'Snow' },
  { id: 2, firstName: 'Daenerys', lastName: 'Targaryen' },
];

describe('App test suite', () => {
  beforeEach(() => {
    (loadCharacters as jest.Mock).mockResolvedValue(mockedCharacters);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render App component', () => {
    render(<App />);

    const component = screen.getByText('Game of Thrones Character List');

    expect(component).toBeInTheDocument();
  });

  it('should render all the characters', async () => {
    render(<App />);

    await waitFor(() => {
      expect(loadCharacters).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(screen.getByTestId('characters-deck')).toBeInTheDocument();
      expect(screen.getByText('Jon Snow')).toBeInTheDocument();
      expect(screen.getByText('Daenerys Targaryen')).toBeInTheDocument();
    });
  });
});
