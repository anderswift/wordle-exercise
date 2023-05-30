import React from "react";

import { checkGuess } from '../../game-helpers';
import { NUM_OF_CHARACTERS } from '../../constants';

function Letter({letter = '', status = ''}) {
  return (
    <span className={`cell${status ? ` ${status}` : ''}`}>
      {letter}
    </span>
  );
}

function GuessedWord({word, answer}) {
  const result = checkGuess(word, answer);
  return (
    <p className="guess">
      {result != null && result.length ? (
        result.map((letterProps, charIndex) => (
          <Letter key={charIndex} {...letterProps} />
        ))
      ) : (
        [...Array(NUM_OF_CHARACTERS)].map((char, charIndex) => (
          <Letter key={charIndex} />
        ))
      )}
    </p>
  );
}

export default React.memo(GuessedWord);
