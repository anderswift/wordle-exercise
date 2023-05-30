import React from "react";

export default function Banner({type, children}) {
  return (
    <div className={`banner ${type}`}>
      <p>
        {children}
      </p>
    </div>
  );
}

export function WonBanner({numberGuesses}) {
  <Banner type="happy">
    <strong>Congratulations!</strong> Got it in
      {' '}
    <strong>{numberGuesses} guesses</strong>.
  </Banner>
}

export function LostBanner({answer}) {
  return (
    <Banner type="sad">
      Sorry, the correct answer is <strong>{answer}</strong>.
    </Banner>
  );
}
