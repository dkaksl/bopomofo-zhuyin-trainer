import React, { useState } from 'react'
import { hot } from 'react-hot-loader'

import {
  getRandomCharacterFromDict,
  getRandomCharacterFromDictExcept,
} from './Dictionary'

function App() {
  const [randomCharacter, setRandomCharacter] = useState({})

  function handleKeyInput(event) {
    var input = event.target.value
    event.target.value = ''
    if (input === randomCharacter.key) {
      setRandomCharacter(getRandomCharacterFromDictExcept(randomCharacter))
    }
  }

  return (
    <main>
      <h1>ㄅㄆㄇㄈ／注音 Trainer</h1>
      <button onClick={() => setRandomCharacter(getRandomCharacterFromDict())}>
        Get random character
      </button>
      <p>Random character: {randomCharacter.character}</p>
      <p>Reading: {randomCharacter.reading}</p>
      <p>Key: {randomCharacter.key}</p>

      <input onChange={(event) => handleKeyInput(event)}></input>
    </main>
  )
}

export default hot(module)(App)
