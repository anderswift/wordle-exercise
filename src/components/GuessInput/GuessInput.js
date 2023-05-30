import React from "react";

import { NUM_OF_CHARACTERS } from '../../constants';

function GuessInput({ handleGuess, disabled }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess(inputValue.toUpperCase());
    setInputValue('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} disabled={disabled}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text" 
        minLength={NUM_OF_CHARACTERS} 
        maxLength={NUM_OF_CHARACTERS} 
        pattern="[a-zA-Z]{5}"
        value={inputValue} 
        onChange={(e)=> setInputValue(e.currentTarget.value)} 
        disabled={disabled}
        required
      />
    </form>
  );
}

export default GuessInput;
