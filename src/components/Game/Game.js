import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessedWord from '../GuessedWord';
import {WonBanner, LostBanner} from '../Banners';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('initial');

  const handleGuess = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const newGuesses = [...guesses, guess];
    const guessesRemaining = NUM_OF_GUESSES_ALLOWED - newGuesses.length;

    setGuesses(newGuesses);

    if (guess === answer) {
      setGameState('won');
    } else if (guessesRemaining <= 0) {
      setGameState('lost');
    }
  }

  return (
    <div className="game-wrapper">
      <div className="guess-results">
        {[...Array(NUM_OF_GUESSES_ALLOWED)].map((empty, guessIndex) => (
          <GuessedWord key={guessIndex} word={guesses[guessIndex]} answer={answer} />
        ))}
      </div>

      <GuessInput handleGuess={handleGuess} disabled={gameState !== 'initial'} />

      {gameState === 'won' && (
        <WonBanner numberGuesses={guesses.length} />
      )}
      {gameState === 'lost' && (
        <LostBanner answer={answer} />
      )}
    </div>
  );
}

export default Game;
